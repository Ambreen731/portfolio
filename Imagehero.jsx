import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
const Hero1 = () => {
  return (
    <div className='bg-slate-50 min-h-[500px] w-full ' >
        
            <div className='w-[90%] mx-auto pt-16'>
                <h1 className='text-3xl font-semibold tracking-wider pb-4  '>Tech Stack</h1>
                <hr class="border-gray-300  "></hr>
            </div>

         <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-14 mx-auto w-[90%]'>
                <div className='max-w-full'> 
                <FaHtml5 className='h-20 w-16 text-green-600'/>
                <h1 className='font-bold text-[20px] py-4'>HTML&CSS</h1>
                <p className='text-gray-500 text-justify'>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
                </div>

                <div className='w-[400px]'> 
                <FaJs className='h-20 w-16 text-green-600'/>
                <h1 className='font-bold text-[20px] py-4'>JavaScript</h1>
                <p className='text-gray-500 text-justify'>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality</p>
                </div>
                <div className='w-[400px]'> 
                <FaReact className='h-20 w-16 text-green-600' />
                <h1 className='font-bold text-[20px] py-4'>React</h1>
                <p className='text-gray-500 text-justify'>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
                </div>
            
</div>
            
        </div>
    
  )
}

export default Hero1