import Image from 'next/image';
import React from 'react';

const WeDoChild = ({ image, title, description, raised, goal }) => {
      return (
            <div className='bg-gray-100 rounded-md'>
                  <div className='w-full h-[200px] overflow-hidden rounded-t-md'>
                        <Image className='w-full h-[200px] object-cover rounded-t-md hover:scale-105 duration-300' src={image} alt='work' />
                  </div>
                  <div className="p-4">
                        <h1 className='capitalize font-medium text-lg mb-3'>{title}</h1>
                        <p className='text-gray-400'>{description}</p>
                        <div className='flex items-center justify-between mt-3 text-gray-600'>
                              <p>Raised:{" "}<span className='font-bold'>${raised}</span></p>
                              <p>Goal:{" "}<span className='font-bold'>${goal}</span></p>
                        </div>
                        <button className='btn_primary mt-5'>donate</button>
                  </div>
            </div>
      );
};

export default WeDoChild;