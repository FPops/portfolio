import React, {useState} from 'react'
import profile from '../images/profile.JPG'
import { FaBars, FaTimes, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import CV from '../assets/fpop_cv.pdf'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);

        const body = document.querySelector("body");

        if(darkMode){
            body.classList.add("dark")
        }else{
            body.classList.remove("dark")
        }
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-orange-300 text-slate-800 dark:bg-slate-900 dark:text-purple-400'>
        <div>
            <img src={profile} alt="profile" style={{width:'100px'}}  className='rounded-full absolute top-6 left-20'/>
        </div>



        {/* menu */}

            <ul className='hidden md:flex'>
                <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>


            <div className='toggle pt-6'>
            <input type="checkbox" className='checkbox hidden' id='checkbox' 
            checked={!darkMode} 
            onChange={toggleTheme}
            />
            <label for="checkbox" className='label'>
                <div className='ball'></div>
            </label>
            <div className='text-center text-xs pt-1'>Dark Mode</div>
        </div>


        {/* hamburger */}
        <div onClick={handleClick} className='mr-5 md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <div>
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-orange-300 dark:bg-slate-900 flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
            <li className="py-6 text-4xl"><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
        </div>

        {/* social */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center mb-2 ml-[-110px] hover:ml-[-10px] duration-300 bg-orange-300 dark:bg-slate-800 rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-black dark:text-purple-400' href={CV} target="_blank">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center mb-2 ml-[-110px] hover:ml-[-10px] duration-300 bg-orange-300 dark:bg-slate-800 rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-black dark:text-purple-400' href="https://github.com/FPops" target='_blank'>
                        Github <FaGithub size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center mb-2 ml-[-110px] hover:ml-[-10px] duration-300 bg-orange-300 dark:bg-slate-800 rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-black dark:text-purple-400' href="https://twitter.com/fpoppyzz" target="_blank">
                        Twitter <FaTwitter size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center mb-2 ml-[-110px] hover:ml-[-10px] duration-300 bg-orange-300 dark:bg-slate-800 rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-black dark:text-purple-400' href="https://www.instagram.com/popiezz/" target="_blank">
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar