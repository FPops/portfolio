import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'

function Skills() {
  return (
    <div name='skills' className='bg-orange-100 dark:bg-slate-900 h-screen w-full text-slate-800 dark:text-slate-300'>
      {/* container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[800px] w-full px-4'>
        <div>
          <p className='text-4xl  font-bold inline border-b-4 border-yellow-300'>Skills</p>
          <p className='py-4 font-bold text-slate-400'>// Technologies I've worked with</p>
        </div>

        <div className='w-full grid  sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8'>

          <div className='shadow-lg shadow-slate-700 hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='font-bold my-4'>HTML</p>
          </div>

          <div className='shadow-lg shadow-slate-700 hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p className='font-bold my-4'>CSS</p>
          </div>

          <div className='shadow-lg shadow-slate-700 hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto' src={Javascript} alt="HTML icon" />
            <p className='font-bold my-4'>JavaScript</p>
          </div>

          <div className='shadow-lg shadow-slate-700 hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto' src={react} alt="HTML icon" />
            <p className='font-bold my-4'>React</p>
          </div>

          <div className='shadow-lg shadow-slate-700 hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
            <p className='font-bold my-4'>Tailwind</p>
          </div>

          <div className='shadow-lg shadow-slate-700 hover:scale-110 duration-500 rounded-md'>
            <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
            <p className='font-bold my-4'>Github</p>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills