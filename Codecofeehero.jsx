import React from 'react'
import codeimage from "../assets/codeimage.svg"


const Codecofeehero = () => {
  return (
    <div>
      <div className='justify-center p-10 p-y-20 items-center mt-20 grid sm:grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <img src={codeimage} className='max-w-72 ml-20 text-1xl'/>
        </div>
        <div className='max-w-[620px] pt-12 max-h-60  ml-12'>
                <h1 className='text-3xl font-semibold tracking-wider pb-4  '>Code and Cofee</h1>
                <hr class="border-gray-300  "></hr>
                <p className='pt-4 text-gray-500' >
                 I'm Ambreen, a seasoned web developer with expertise in React and component-based projects. 
                 With a year of experience, I've mastered Redux for global state management and wield Axios 
                 for seamless data fetching. Let's collaborate and transform your ideas into digital brilliance!
                </p>
         </div>
        </div>
    </div>
  )
}

export default Codecofeehero;