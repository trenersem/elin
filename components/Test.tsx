'use client'

import { IAppointment, ServiceType } from '@/types';
import React, { useEffect, useState } from 'react'
import Button from './ui/button';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { Vortex } from './ui/vortex';
import { WavyBackground } from './ui/wavy-background';

const Test = () => {

  return (
        <div className="w-full  min-h-[100vh] h-[50rem] overflow-hidden">
      {/* <Vortex
        backgroundColor="black"
        rangeY={200}
        className="flex items-center flex-col justify-center py-4 w-full h-full"
      > */}
      <WavyBackground
        className="max-w-4xl mx-auto pb-40"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
          Ellin Click
          {' '}
          <span className='text-purple'>
               BeautyHub
          </span>
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
        </WavyBackground>
      {/* </Vortex> */}
    </div>
    //     <div className='pb-20 pt-36'> 
    //      {/* <div className="h-screen w-full dark:bg-white-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
    //         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    //      </div> */}
    //     <Vortex
    //         backgroundColor="black"
    //         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    //     >
    //         <div className='flex justify-center relative my-20 z-10'>
    //             <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
    //                 <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
    //                     Dynamic Web Magic Next.js
    //                 </h2>
    //                 <TextGenerateEffect
    //                     className='text-center text-[40px] md:text-5xl lg:text-6xl'
    //                     words='Transforming Concepts into Seanless User Experiences'
    //                 />

    //                 <p
    //                     className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
    //                 >
    //                     Hi, I&apos;m Volodymyr, a Front end Developer based in USA
    //                 </p>

    //                 <a
    //                     href='#about'
    //                 >
    //                     <Button 
    //                         title='Book now'
    //                         // icon={<FaLocationArrow />}
    //                         position='right'
    //                     />
    //                 </a>
    //             </div>

    //         </div>
    //     </Vortex>
    // </div>
  )
}

export default Test;








