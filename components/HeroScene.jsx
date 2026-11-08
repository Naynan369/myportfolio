import { useEffect, useRef } from 'react'
import { dataAnalysisTools, dataTools } from '../lib/dataTools'

const TAU = Math.PI * 2
const PHASES = [0, 2.18, 4.34]

function pointOnStrand(THREE, angle, phase) {
  const radius = 1.48 + Math.sin(angle * 3 + phase) * 0.23 + Math.cos(angle * 5 - phase) * 0.1
  return new THREE.Vector3(
    Math.cos(angle) * radius,
    Math.sin(angle * 2 + phase) * 1.08 + Math.cos(angle * 5 - phase) * 0.13,
    Math.sin(angle) * radius * 0.68 + Math.cos(angle * 3 + phase) * 0.27,
  )
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

export default function HeroScene() {
  const fieldRef = useRef(null)

  useEffect(() => {
    const field = fieldRef.current
    if (!field) return undefined

    let disposed = false
    let frameId = 0
    let cleanup = () => {}

    import('three').then((THREE) => {
      if (disposed) return

      const labels = Array.from(field.querySelectorAll('.hero-tool-label'))
      const curves = PHASES.map(phase => {
        const points = Array.from({ length: 240 }, (_, index) => pointOnStrand(THREE, index / 240 * TAU, phase))
        return new THREE.CatmullRomCurve3(points, true, 'centripetal')
      })
      const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 40)
      const rotation = new THREE.Group()
      const hero = field.closest('.hero')
      const scene = field.parentElement
      const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
      const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }
      let visible = true
      let elapsed = 0
      let lastFrame = 0
      let width = 0
      let height = 0
      let labelSizes = []

      const draw = (time) => {
        if (!width || !height) return
        const seconds = time * 0.001
        rotation.rotation.y = -0.18 + Math.sin(seconds * 0.25) * 0.2 + pointer.x
        rotation.rotation.x = -0.13 + Math.sin(seconds * 0.28) * 0.055 + pointer.y
        rotation.rotation.z = Math.sin(seconds * 0.17) * 0.035
        rotation.updateMatrixWorld(true)

        const projected = labels.map((label, index) => {
          const curve = curves[index % curves.length]
          const offset = index / labels.length
          const position = curve.getPointAt((seconds * 0.04 + offset) % 1)
          position.applyMatrix4(rotation.matrixWorld)
          const depth = clamp((position.z + 1.6) / 3.2, 0, 1)
          const worldZ = position.z
          position.project(camera)
          const x = (position.x + 1) * width / 2
          const y = (1 - position.y) * height / 2
          const leftFade = width < 520 ? 1 : clamp((x - width * 0.09) / (width * 0.2), 0, 1)
          const backFade = width < 520
            ? clamp((depth - 0.48) / 0.18, 0, 1)
            : clamp((depth - 0.17) / 0.32, 0, 1)
          const scale = (width < 520 ? 1.12 : 1) * (0.74 + depth * 0.34)
          return { label, x, y, scale, worldZ, depth, opacity: (0.45 + depth * 0.55) * leftFade * backFade, size: labelSizes[index] }
        })

        const visibleLabels = []
        projected.sort((a, b) => b.depth - a.depth).forEach(item => {
          const overlap = visibleLabels.some(other =>
            Math.abs(item.x - other.x) < (item.size.width * item.scale + other.size.width * other.scale) / 2 + 7 &&
            Math.abs(item.y - other.y) < (item.size.height * item.scale + other.size.height * other.scale) / 2 + 5
          )
          if (overlap || item.opacity < 0.18) item.opacity = 0
          else visibleLabels.push(item)
        })

        projected.forEach(({ label, x, y, scale, worldZ, opacity }) => {
          label.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`
          label.style.opacity = String(opacity)
          label.style.zIndex = String(Math.round((worldZ + 2) * 100))
        })
      }

      const resize = () => {
        width = field.clientWidth
        height = field.clientHeight
        if (!width || !height) return
        labelSizes = labels.map(label => ({ width: label.offsetWidth, height: label.offsetHeight }))
        camera.position.set(0, 0.25, width < 520 ? 6.25 : 7.7)
        camera.lookAt(0, 0, 0)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        draw(elapsed)
      }

      const tick = (time) => {
        if (disposed || document.hidden || !visible || motionPreference.matches) return
        frameId = window.requestAnimationFrame(tick)
        if (!lastFrame) { lastFrame = time; return }
        if (time - lastFrame < 32) return
        const delta = Math.min(time - lastFrame, 50)
        elapsed += delta
        const smoothing = 1 - Math.exp(-delta / 180)
        pointer.x += (pointer.targetX - pointer.x) * smoothing
        pointer.y += (pointer.targetY - pointer.y) * smoothing
        lastFrame = time
        draw(elapsed)
      }

      const syncMotion = () => {
        window.cancelAnimationFrame(frameId)
        frameId = 0
        lastFrame = 0
        draw(elapsed)
        if (!motionPreference.matches && !document.hidden && visible) frameId = window.requestAnimationFrame(tick)
      }

      const movePointer = (event) => {
        if (event.pointerType === 'touch') return
        const bounds = scene.getBoundingClientRect()
        pointer.targetX = clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 0.7, -0.35, 0.35)
        pointer.targetY = clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * 0.45, -0.225, 0.225)
        if (motionPreference.matches) {
          pointer.x = pointer.targetX
          pointer.y = pointer.targetY
          draw(elapsed)
        }
      }
      const resetPointer = () => {
        pointer.targetX = 0
        pointer.targetY = 0
        if (motionPreference.matches) {
          pointer.x = 0
          pointer.y = 0
          draw(elapsed)
        }
      }

      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(field)
      const viewObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        syncMotion()
      }, { threshold: 0.02 })
      viewObserver.observe(hero)
      scene.addEventListener('pointermove', movePointer)
      scene.addEventListener('pointerleave', resetPointer)
      motionPreference.addEventListener('change', syncMotion)
      document.addEventListener('visibilitychange', syncMotion)
      resize()
      syncMotion()

      cleanup = () => {
        resizeObserver.disconnect()
        viewObserver.disconnect()
        scene.removeEventListener('pointermove', movePointer)
        scene.removeEventListener('pointerleave', resetPointer)
        motionPreference.removeEventListener('change', syncMotion)
        document.removeEventListener('visibilitychange', syncMotion)
      }
    }).catch(() => {})

    return () => {
      disposed = true
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div className='hero-scene hero-tool-scene' role='group' aria-label='Animated data tools'>
      <div className='hero-tool-field' ref={fieldRef} aria-hidden='true'>
        {dataTools.map((name, index) => (
          <span
            className={'hero-tool-label' + (index >= dataAnalysisTools.length ? ' hero-tool-label--database' : '')}
            key={name}
          >{name}</span>
        ))}
      </div>
    </div>
  )
}
