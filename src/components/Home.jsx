import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-orange-100 dark:bg-slate-900">

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full pl-20 pr-20'>

            <p className='text-orange-600 font-bold text-2xl sm:mt-16 mt-20'>Hi, my name is</p>

            <h1 className='text-4xl sm:text-7xl font-bold mb-8 text-slate-400'>Filip Popescu</h1>

          <h2 className='text-4xl sm:text-6xl text-center font-bold mb-8 text-slate-600'>I'm a Front End Developer</h2>

            {/* <p className='text-2xl sm:text-4xl text-center font-medium mb-5 text-slate-400 flex max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id voluptate dolorum nulla aut eos? Corporis sunt repellat eligendi recusandae cupiditate.</p> */}


            {/* Button */}
            <div><Link to="work" smooth={true} duration={500}>
                <button className=' text-black dark:text-white group font-bold border-4 border-blue-300 px-6 py-3 my-2 rounded-3xl flex items-center hover:border-blue-600  '>My Work
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-2'/>
                </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home