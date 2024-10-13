import React from 'react'
import hero from "../../assets/hero.png"
const Hero = () => {
  return  <section>
         <div className=" bg-bandwhite rounded-3xl pt-3 pb-3 container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px] ">
                {/* Text info */}
                <div className=' flex flex-col justify-center xl:pr-40'>
                  <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-16  text-center md:text-left'>
                  <h1 className='text-5xl font-bold text-darkblue '> 
                     COVID-19 RISK <br/>ASSESMENT TOOL
                    </h1>
                    <p className='text-lg text-gray-400 mt-4 pb-4'>
                      A set of solutions designed to help quickly identify coronavirus symptoms and get reliable information regarding COVID-19 concerns.
                    </p>
                   <div className='bg-primary text-white px-6 py-4 rounded-lg mt-8 mx-auto md:mx-0 inline w-fit text-2xl font-semibold hover:shadow-2xl duration-300'>
                    <button>See how to use it</button>
                   </div>
                  </div>
                </div>
                {/* image section */}
                <div className=' flex flex-col justify-center'>
                    <img src={hero} alt=" photo" className='h-[450px]' />
                </div>
         </div>
  </section>

}

export default Hero