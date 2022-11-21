import Image from 'next/image';
import React from 'react';

const GalleryDnrChild = ({ image }) => {
      return (
            <div className='w-full h-auto'>
                  <Image className='w-full h-auto object-cover' src={image} alt='donor' />
            </div>
      );
};

export default GalleryDnrChild;