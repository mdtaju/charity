import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const GalleryEvChild = () => {
      return (
            <div className='grid grid-cols-10 gap-1'>
                  <div className='bg-[#0A5174] text-white p-4 rounded-tl-md rounded-bl-md w-fit col-span-2 flex items-center justify-center'>
                        <div className='flex flex-col gap-1 text-center'>
                              <h1 className='font-medium text-4xl'>28</h1>
                              <div className='w-full h-[1px] bg-white'></div>
                              <p className='text-xl font-normal uppercase'>Feb</p>
                        </div>
                  </div>
                  <div className='col-span-8 flex flex-col gap-3 md:pr-4'>
                        <h1 className='font-semibold text-lg text-gray-700'>Gallery event child</h1>
                        <div className='flex items-center gap-3'>
                              <div className='flex items-center gap-2 text-gray-500 '><AiOutlineClockCircle className='text-gray-800 font-medium' />{" "}<p className='text-sm'>5:00 PM - 7:30 PM</p></div>
                              <div className='flex items-center gap-2 text-gray-500 '><GoLocation className='text-gray-800 font-medium' />{" "}<p className='text-sm'>Abudabi City</p></div>
                        </div>
                        <p className='truncate text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.</p>
                  </div>
            </div>
      );
};

export default GalleryEvChild;