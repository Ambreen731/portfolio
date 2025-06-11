import React from 'react'
import yourbag from "../assets/yourbag.png"
import { FaGlobe } from "react-icons/fa";
import tour from "../assets/tour.png"
import unsplash from "../assets/unsplash.png"



const Webcreationhero = () => {
  return (
    <div className='bg-slate-50'>
           <div className='w-[90%] mx-auto pt-24 '>
                 <h1 className='text-3xl font-semibold tracking-wider pb-4  '>Web Creation</h1>
                 <hr class="border-gray-300  "></hr>
            </div>
            {/* main div */}

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-20 pb-16 '>
            
             {/* div 1 */}
            <div className='h-[470px] w-full border border-gray-300 rounded-md  hover:opacity-100    hover: transition-all duration-5000 ease-in-out hover:scale-110 ' >
                    
                <div className=''>
                      <img src={yourbag} className='w-auto text-1xl rounded-tl-md rounded-tr-md'/>
                </div>
                    <div className='ml-2 px-3 '>
                     <h3 className='font-semibold mt-11'>First Project</h3>
                     <p className='pt-2  tracking-wide text-justify'>Experience Redux’s power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
                    </div>  
                    <FaGlobe  className='h-9 w-12 text-gray-500 pl-4 hover:text-black trasition duration-500 cursor-pointer pt-2 mb-9 ' />
            </div>
             {/* div 2 */}
            <div className= 'h-[470px] w-full border border-gray-300 rounded-md  hover:opacity-100   hover: transition-all duration-[9000px] ease-in-out hover:scale-110 '>
                <div className=''>
                      <img src={tour} className='w-auto text-1xl rounded-tl-md rounded-tr-md'/>
                </div>
                    <div className='ml-2 px-3'>
                     <h3 className='font-semibold mt-11'>Second Project</h3>
                     <p className='pt-2 tracking-wide text-justify '>Experience Redux’s power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
                     
                    </div>  
                    <FaGlobe  className='h-9 w-12 text-gray-500 pl-4 hover:text-black trasition duration-500 cursor-pointer pt-2 ' />
            </div>
            {/* div 3 */}

            <div className='h-[470px] w-full border border-gray-300 rounded-md  hover:opacity-100   hover: transition-all duration-[9000px] ease-in-out hover:scale-110  '>
                <div className=''>
                      <img src={unsplash} className='w-auto text-1xl rounded-tl-md rounded-tr-md'/>
                </div>
                    <div className='ml-2 px-3'>
                     <h3 className='font-semibold mt-11'>Third Project</h3>
                     <p className='pt-2 tracking-wide text-justify'>Experience Redux’s power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
                     
                    </div>  
                    <FaGlobe  className='h-9 w-12 text-gray-600 pl-4  hover:text-black trasition duration-500 cursor-pointer pt-2 '/>
            </div>

            
          </div>
    </div>
  )
}

export default Webcreationhero;