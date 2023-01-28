import React from 'react';
import GalleryPhoto from './GalleryPhoto';

const Gallery = ({ glr }) => {

      return (
            <div className='gap'>
                  <div className="container mx-auto px-2 sm:px-3">
                        <GalleryPhoto gallery={glr} />
                  </div>
            </div>
      );
};

export default Gallery;