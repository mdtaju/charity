import React from 'react';
import GalleryDonors from './GalleryDonors';
import GalleryEvents from './GalleryEvents';
import GalleryPhoto from './GalleryPhoto';

const Gallery = () => {
      return (
            <div className='gap'>
                  <div className="container mx-auto px-2 sm:px-3">
                        <div className="md:grid md:grid-cols-5 gap-3">
                              <GalleryEvents />
                              <div className='col-span-3'>
                                    <GalleryPhoto />
                                    <GalleryDonors />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Gallery;