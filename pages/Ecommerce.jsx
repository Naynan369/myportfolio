import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const powerBiUrl = 'https://app.powerbi.com/groups/me/reports/bf4bc7ba-7843-4f9c-9b0c-36b17860686e/4cc77413e28198b6d24c?experience=power-bi'
const githubUrl = 'https://github.com/Naynan369/Ecommerce'

const technologies = [
  'Python',
  'Pandas',
  'Excel',
  'Power BI',
  'RFM Customer Segmentation',
]

const Ecommerce = () => {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='relative h-[42vh] min-h-[360px] overflow-hidden sm:h-[52vh]'>
        <Image
            src='/assets/projects/Ecommerce.png'
            alt='E-commerce Power BI analytics dashboard'
            layout='fill'
            objectFit='cover'
            priority
            className='brightness-50'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-slate-950/90' />

        <div className='absolute inset-x-0 bottom-0'>
          <div className='mx-auto max-w-[1240px] px-4 pb-10 text-white sm:px-6'>
            <p className='text-sm font-medium uppercase tracking-[0.32em] text-indigo-300'>
              Data Analytics · Power BI
            </p>
            <h1 className='mt-3 text-4xl font-semibold sm:text-5xl'>
              E-commerce Sales Analytics
            </h1>
            <p className='mt-3 max-w-2xl text-base text-slate-200 sm:text-lg'>
              Sales performance reporting and RFM customer segmentation.
            </p>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-[1240px] px-4 py-16 sm:px-6'>
        <div className='grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]'>
          <div className='space-y-6'>
            <span className='text-sm font-medium uppercase tracking-[0.28em] text-indigo-600'>
              Project Overview
            </span>

            <h2 className='text-3xl font-semibold text-slate-900'>
              E-commerce Sales & Customer Segmentation
            </h2>

            <p className='leading-8 text-slate-600'>
              An end-to-end e-commerce analytics project built from two years of
              transaction-level retail data. I cleaned duplicate and invalid records,
              identified cancellations, calculated key sales metrics, and created
              customer segments using RFM analysis.
            </p>

            <p className='leading-8 text-slate-600'>
              The final Power BI dashboard presents net revenue, total orders, total
              customers, sales by country and product, top customers, and customer
              segments such as Champions, Loyal Customers, At Risk, and Lost Customers.
            </p>

            <div className='flex flex-wrap gap-4 pt-2'>
              <a
                href={powerBiUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
              >
                View Power BI Dashboard
              </a>

              <a
                href={githubUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'
              >
                View Code
              </a>
            </div>
          </div>

          <aside className='h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-8'>
            <p className='text-sm font-medium uppercase tracking-[0.28em] text-slate-500'>
              Technologies
            </p>

            <div className='mt-6 space-y-3'>
              {technologies.map((tech) => (
                <p key={tech} className='flex items-center gap-2 text-slate-700'>
                  <RiRadioButtonFill className='shrink-0 text-indigo-500' />
                  {tech}
                </p>
              ))}
            </div>
          </aside>
        </div>

        <div className='mt-14'>
          <Link
            href='/#projects'
            className='text-sm font-medium text-indigo-600 hover:underline'
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Ecommerce