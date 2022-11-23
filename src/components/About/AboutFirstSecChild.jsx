import Image from 'next/image';
import React from 'react';

const AboutFirstSecChild = ({ image, title, des }) => {
      return (
            <div className='p-2 flex flex-col gap-3'>
                  <div className='w-full h-[180px]'>
                        <Image className='w-full h-full object-cover object-center rounded-sm' src={image} alt='poor' />
                  </div>
                  <div>
                        <h1 className='text-lg font-medium text-[#0A5174]'>In the Spotlight</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174] mt-2'></div>
                  </div>
                  <p className='text-gray-400 text-base font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, amet magnam molestias quo enim libero?</p>
            </div>
      );
};

export default AboutFirstSecChild;