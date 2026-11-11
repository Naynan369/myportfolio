import { useEffect, useRef } from 'react'

export default function AboutScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const stage = canvas?.parentElement
    if (!canvas || !stage) return undefined

    let disposed = false
    let frameId = 0
    let renderer
    let cleanup = () => {}
    const resources = []

    import('three').then((THREE) => {
      if (disposed) return
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' })
      } catch (error) {
        return
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7))
      renderer.setClearColor(0x000000, 0)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 30)
      camera.position.set(0, 0, 7.8)

      const sculpture = new THREE.Group()
      scene.add(sculpture)
      const network = new THREE.Group()
      network.position.x = -1.34
      sculpture.add(network)

      const brass = new THREE.MeshStandardMaterial({ color: 0xc49a5a, metalness: 0.28, roughness: 0.58, emissive: 0x49351c, emissiveIntensity: 0.13 })
      const terracotta = new THREE.MeshStandardMaterial({ color: 0xb45e48, metalness: 0.22, roughness: 0.64, emissive: 0x47211f, emissiveIntensity: 0.12 })
      const pathMaterial = new THREE.MeshBasicMaterial({ color: 0xd2a05e, transparent: true, opacity: 0.52, depthWrite: false })
      const linkMaterial = new THREE.LineBasicMaterial({ color: 0xa65a54, transparent: true, opacity: 0.32, depthWrite: false })
      resources.push(brass, terracotta, pathMaterial, linkMaterial)

      const nodes = []
      const columns = [-0.9, -0.08, 0.76]
      for (let row = 0; row < 9; row += 1) {
        for (let column = 0; column < 3; column += 1) {
          const x = columns[column] + Math.sin(row * 1.15 + column * 1.8) * 0.16
          const y = -2.12 + row * 0.53 + Math.sin(row * 1.7 + column) * 0.07
          const z = Math.sin(row * 1.26 + column * 2.3) * 0.72
          nodes.push(new THREE.Vector3(x, y, z))
        }
      }

      const edges = []
      for (let row = 0; row < 8; row += 1) {
        for (let column = 0; column < 3; column += 1) {
          const from = nodes[row * 3 + column]
          edges.push(...from.toArray(), ...nodes[(row + 1) * 3 + column].toArray())
          if ((row + column) % 2 === 0 && column < 2) {
            edges.push(...from.toArray(), ...nodes[(row + 1) * 3 + column + 1].toArray())
          }
        }
      }
      const edgeGeometry = new THREE.BufferGeometry()
      edgeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(edges, 3))
      network.add(new THREE.LineSegments(edgeGeometry, linkMaterial))
      resources.push(edgeGeometry)

      const nodeGeometry = new THREE.IcosahedronGeometry(0.075, 1)
      resources.push(nodeGeometry)
      nodes.forEach((position, index) => {
        const node = new THREE.Mesh(nodeGeometry, index % 5 === 0 ? terracotta : brass)
        node.position.copy(position)
        node.scale.setScalar(index % 7 === 0 ? 1.25 : 1)
        network.add(node)
      })

      const trendPoints = [0, 4, 6, 10, 13, 15, 19, 22, 26].map((index) => nodes[index])
      const trendGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(trendPoints), 120, 0.021, 6, false)
      network.add(new THREE.Mesh(trendGeometry, pathMaterial))
      resources.push(trendGeometry)

      ;[4, 13, 22].forEach((index) => {
        const geometry = new THREE.TorusGeometry(0.17, 0.01, 5, 32)
        const material = new THREE.MeshBasicMaterial({ color: 0xc77c55, transparent: true, opacity: 0.33, depthWrite: false })
        const halo = new THREE.Mesh(geometry, material)
        halo.position.copy(nodes[index])
        network.add(halo)
        resources.push(geometry, material)
      })

      const orbit = new THREE.Group()
      orbit.position.set(0.32, 0.04, -0.55)
      sculpture.add(orbit)
      ;[
        { radius: 2.2, rotation: [0.64, 0.28, 0.2], color: 0xc49a5a, opacity: 0.24 },
        { radius: 1.86, rotation: [1.13, -0.62, 0.5], color: 0xb45e48, opacity: 0.32 },
        { radius: 2.45, rotation: [0.34, 1.02, -0.25], color: 0x9b6f4a, opacity: 0.15 },
      ].forEach(({ radius, rotation, color, opacity }) => {
        const geometry = new THREE.TorusGeometry(radius, 0.014, 5, 160)
        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false })
        const ring = new THREE.Mesh(geometry, material)
        ring.rotation.set(...rotation)
        orbit.add(ring)
        resources.push(geometry, material)
      })

      const particles = new Float32Array(90 * 3)
      const particleColors = new Float32Array(90 * 3)
      const brassParticle = new THREE.Color(0xcaa05d)
      const clayParticle = new THREE.Color(0xbd7053)
      for (let index = 0; index < 90; index += 1) {
        const angle = index * 2.399963
        const radius = 0.45 + Math.sqrt(index / 90) * 2.35
        particles[index * 3] = Math.cos(angle) * radius
        particles[index * 3 + 1] = Math.sin(angle) * radius * 0.92
        particles[index * 3 + 2] = Math.sin(index * 1.91) * 1.1 - 0.8
        ;(index % 3 === 0 ? clayParticle : brassParticle).toArray(particleColors, index * 3)
      }
      const particleGeometry = new THREE.BufferGeometry()
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3))
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
      const particleMaterial = new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.4, sizeAttenuation: true, depthWrite: false })
      sculpture.add(new THREE.Points(particleGeometry, particleMaterial))
      resources.push(particleGeometry, particleMaterial)

      scene.add(new THREE.AmbientLight(0xffffff, 1.0))
      const brassLight = new THREE.PointLight(0xd4ad68, 5, 12)
      brassLight.position.set(-2.5, 2, 3)
      const clayLight = new THREE.PointLight(0xc27459, 4, 12)
      clayLight.position.set(2.5, -1, 2)
      scene.add(brassLight, clayLight)

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
      const pointer = { x: 0, y: 0 }
      let inView = false
      let lastFrame = 0
      const resize = () => {
        const width = stage.clientWidth
        const height = stage.clientHeight
        if (!width || !height) return
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.position.z = width < 450 ? 8.7 : 7.8
        camera.updateProjectionMatrix()
        renderer.render(scene, camera)
      }
      const draw = (timestamp) => {
        if (disposed || document.hidden || !inView || reducedMotion.matches) return
        frameId = window.requestAnimationFrame(draw)
        if (timestamp - lastFrame < 32) return
        lastFrame = timestamp
        const time = timestamp * 0.001
        network.rotation.y = Math.sin(time * 0.18) * 0.1 + pointer.x * 0.18
        network.position.y = Math.sin(time * 0.32) * 0.035
        orbit.rotation.y = time * -0.035 + pointer.x * 0.08
        orbit.rotation.z = Math.sin(time * 0.16) * 0.025
        sculpture.rotation.x += (pointer.y * 0.06 - sculpture.rotation.x) * 0.04
        renderer.render(scene, camera)
      }
      const updateMotion = () => {
        window.cancelAnimationFrame(frameId)
        frameId = 0
        if (!reducedMotion.matches && !document.hidden && inView) frameId = window.requestAnimationFrame(draw)
        else renderer.render(scene, camera)
      }
      const move = (event) => {
        const bounds = stage.getBoundingClientRect()
        pointer.x = (event.clientX - bounds.left) / bounds.width - 0.5
        pointer.y = (event.clientY - bounds.top) / bounds.height - 0.5
      }
      const leave = () => { pointer.x = 0; pointer.y = 0 }
      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(stage)
      const viewObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting
        updateMotion()
      }, { threshold: 0.01 })
      viewObserver.observe(stage)
      stage.addEventListener('pointermove', move)
      stage.addEventListener('pointerleave', leave)
      reducedMotion.addEventListener('change', updateMotion)
      document.addEventListener('visibilitychange', updateMotion)
      resize()
      updateMotion()

      cleanup = () => {
        resizeObserver.disconnect()
        viewObserver.disconnect()
        stage.removeEventListener('pointermove', move)
        stage.removeEventListener('pointerleave', leave)
        reducedMotion.removeEventListener('change', updateMotion)
        document.removeEventListener('visibilitychange', updateMotion)
      }
    }).catch(() => {})

    return () => {
      disposed = true
      window.cancelAnimationFrame(frameId)
      cleanup()
      resources.forEach((resource) => resource.dispose())
      renderer?.dispose()
    }
  }, [])

  return <canvas className='about-scene' ref={canvasRef} aria-hidden='true' />
}
