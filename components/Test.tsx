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
          This is chemical burn. 
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
    
  )
}

export default Test;








