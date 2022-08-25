import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-orange-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300'>
        
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>

                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-300'>About</p>
                </div>

                <div>
                </div>
                </div>

                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 md:px-20 px-10'>
                    <div className='sm:text-right text-4xl font-bold mb-4'>
                        <p>Hi. I'm Filip, nice to meet you. Please have a look around</p>
                    </div>

                    <div className='flex items-center justify-center text-left text-xl'>
                        <p>A front-end developer with a keen eye for details, I aim to create interactive and funcitonal websites for individuals or small businesses.</p>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default About