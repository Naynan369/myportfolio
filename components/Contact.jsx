import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      alert('Error sending message.');
    }
  };

  return (
    <section id='contact' className='w-full scroll-mt-24 bg-slate-950/5 py-20'>
      <div className='mx-auto max-w-[1140px] px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-indigo-600'>Contact</p>
          <h2 className='py-4 text-4xl font-bold text-slate-900'>Ready to build something great?</h2>
          <p className='text-slate-600'>Send a message and let’s discuss your next website or app.</p>
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]'>
            <div className='flex h-full flex-col justify-between gap-8'>
              <div>
                <div className='relative h-72 overflow-hidden rounded-[1.75rem]'>
                  <Image
                    src='https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
                    alt='Professional contact'
                    layout='fill'
                    objectFit='cover'
                    unoptimized
                  />
                </div>
              </div>

              <div>
                <h3 className='text-2xl font-semibold text-slate-900'>Samuel Zewge</h3>
                <p className='text-slate-600'>Full-stack Developer</p>
                <p className='mt-4 text-slate-600'>I’m available for freelance or full-time positions. Let’s connect and create something impressive.</p>
              </div>

              <div>
                <p className='text-sm uppercase tracking-[0.25em] text-slate-500'>Connect With Me</p>
                <div className='mt-4 flex flex-wrap gap-4'>
                  <a href='https://www.linkedin.com/in/samuel-zewge-a47a03271' target='_blank' rel='noreferrer' className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200'>
                    <FaLinkedinIn />
                  </a>
                  <a href='https://github.com/Naynan369' target='_blank' rel='noreferrer' className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200'>
                    <FaGithub />
                  </a>
                  <a href='mailto:hello@example.com' className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200'>
                    <AiOutlineMail />
                  </a>
                  <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200'>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid gap-4 md:grid-cols-2'>
                <label className='flex flex-col gap-2 text-sm text-slate-700'>
                  Name
                  <input className='rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500' type='text' name='name' required />
                </label>
                <label className='flex flex-col gap-2 text-sm text-slate-700'>
                  Phone Number
                  <input className='rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500' type='text' name='phoneNumber' required />
                </label>
              </div>

              <label className='flex flex-col gap-2 text-sm text-slate-700'>
                Email
                <input className='rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500' type='email' name='email' required />
              </label>

              <label className='flex flex-col gap-2 text-sm text-slate-700'>
                Subject
                <input className='rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500' type='text' name='subject' required />
              </label>

              <label className='flex flex-col gap-2 text-sm text-slate-700'>
                Message
                <textarea className='min-h-[180px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500' rows='8' name='message' required />
              </label>

              <button type='submit' className='w-full rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'>
                Send Message
              </button>
            </form>

            <div className='mt-10 flex justify-center'>
              <Link href='/'>
                <a className='inline-flex items-center justify-center rounded-full bg-slate-100 p-4 text-slate-900 shadow-sm transition hover:scale-105'>
                  <HiOutlineChevronDoubleUp size={28} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
