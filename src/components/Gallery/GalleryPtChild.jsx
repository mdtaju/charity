import Image from 'next/image';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const GalleryPtChild = ({ image }) => {
      return (
            <div className='w-full h-[111px] relative group/ptGI'>
                  <Image className='w-full h-full object-cover absolute top-0 right-0' src={image} alt='event-image' />
                  <div className='w-full h-[111px] bg-black bg-opacity-70 absolute scale-95 group-hover/ptGI:scale-100 top-0 right-0 z-10 flex items-center justify-center invisible group-hover/ptGI:visible duration-150 ease-in-out'>
                        <div className='p-2 bg-gray-500 rounded-full w-fit cursor-pointer'>
                              <AiOutlineEye className='text-white text-lg font-medium' />
                        </div>
                  </div>
            </div>
      );
};

export default GalleryPtChild;