import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-orange-100 dark:bg-slate-900 flex justify-center items-center p-4 pt-20'>
        <form method='POST' action="https://getform.io/f/2f5850ee-66f0-41cf-8c81-447e102e4c9f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-300 text-slate-800 dark:text-gray-300'>Contact</p>
                <p className='dark:text-gray-300 text-slate-700 py-4'>// Submit the form below or shoot me an email - <b>philpopescu@gmail.com</b></p>
            </div>
            <input className='bg-slate-200 text-black p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-slate-200 text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-slate-200 text-black p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='dark:text-white text-black justify-center font-bold border-4 border-sky-300 px-6 py-3 my-2 rounded-3xl flex items-center hover:border-sky-600'>Let's Work Together</button>
        </form>
    </div>
  )
}

export default Contact


