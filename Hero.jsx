import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import mobile from "../assets/mobile.svg"


const Hero = () => {
  return (
    <div>
        <div className='bg-green-100 sm:flex gap-5 py-28 h-[570px] '>
         <div className=' ml-10 flex gap-52 '>
          <div>
            <div>
            <h1 className='text-6xl font-bold pt-14'>I'm Syeda</h1>
             <h1 className='text-gray-600 text-3xl py-4 pb-2'>Front-End Developer</h1> 
              <h1 className='text-gray-600 text-sm py-2 pb-2 tracking-wide'>Turning Ideas Into Interactive Reality</h1>
            
          </div>
          <div className='flex gap-5 w-80 py-4 '>
            < FaGithub  className='h-9 w-9 text-gray-500 hover:text-black trasition duration-500 cursor-pointer'/>
            <FaLinkedin  className='h-9 w-9  text-gray-500 hover:text-black trasition duration-500 cursor-pointer'/>
            <FaTwitterSquare className='h-9 w-9  text-gray-500 hover:text-black trasition duration-500 cursor-pointer'/>
          </div>
          </div>
           
           <div className='md:flex hidden'>
          <img src={mobile} className='w-96 text-1xl ml-28'/>
        </div>
         </div>
         
        </div>
       
    </div>
  )
}

export default Hero