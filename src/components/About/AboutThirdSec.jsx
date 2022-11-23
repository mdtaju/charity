import React from 'react';
import GImg1 from '../../../public/resources/images/gallery-1.jpg';
import GImg2 from '../../../public/resources/images/gallery-2.jpg';
import GImg3 from '../../../public/resources/images/gallery-3.jpg';
import GImg4 from '../../../public/resources/images/gallery-4.jpg';
import GalleryPtChild from '../Gallery/GalleryPtChild';

const AboutThirdSec = () => {
      return (
            <div className='gap'>
                  <div className="container mx-auto">
                        <div className='p-2 md:px-4 w-full'>
                              <div className='mb-4'>
                                    <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>Events Gallery</h1>
                                    <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2">
                                    <GalleryPtChild
                                          image={GImg1}
                                    />
                                    <GalleryPtChild
                                          image={GImg2}
                                    />
                                    <GalleryPtChild
                                          image={GImg3}
                                    />
                                    <GalleryPtChild
                                          image={GImg4}
                                    />
                                    <GalleryPtChild
                                          image={GImg1}
                                    />
                                    <GalleryPtChild
                                          image={GImg2}
                                    />
                                    <GalleryPtChild
                                          image={GImg3}
                                    />
                                    <GalleryPtChild
                                          image={GImg4}
                                    />
                                    <GalleryPtChild
                                          image={GImg2}
                                    />
                                    <GalleryPtChild
                                          image={GImg3}
                                    />
                                    <GalleryPtChild
                                          image={GImg4}
                                    />
                                    <GalleryPtChild
                                          image={GImg2}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutThirdSec;