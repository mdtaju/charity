import React from 'react';
import GalleryEvChild from './GalleryEvChild';

const GalleryEvents = () => {
      return (
            <div className='col-span-2 p-2 md:pr-2 md:p-0'>
                  <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>upcoming events</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <div className="flex flex-col gap-4">
                        <GalleryEvChild />
                        <GalleryEvChild />
                        <GalleryEvChild />
                  </div>
            </div>
      );
};

export default GalleryEvents;