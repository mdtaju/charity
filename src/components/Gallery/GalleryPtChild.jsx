import Image from 'next/image';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const GalleryPtChild = ({ image }) => {
      return (
            <div className='w-full h-[111px] relative group/ptGI'>
                  <Image className='w-full h-full object-cover absolute top-0 right-0' src={image} alt='event-image' />
                  <div className='w-full h-[111px] hover:bg-black hover:bg-opacity-70 duration-200 absolute top-0 right-0 z-10 flex items-center justify-center'>
                        <div className='p-2 invisible -translate-y-2 group-hover/ptGI:visible group-hover/ptGI:translate-y-2 duration-200 ease-out bg-gray-500 rounded-full w-fit cursor-pointer'>
                              <AiOutlineEye className='text-white text-lg font-medium' />
                        </div>
                  </div>
            </div>
      );
};

export default GalleryPtChild;