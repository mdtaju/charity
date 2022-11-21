import React from 'react';
import Dnr1 from '../../../public/resources/images/dnr-1.png';
import Dnr2 from '../../../public/resources/images/dnr-2.png';
import Dnr3 from '../../../public/resources/images/dnr-3.png';
import Dnr4 from '../../../public/resources/images/dnr-4.png';
import Dnr5 from '../../../public/resources/images/dnr-5.png';
import Dnr6 from '../../../public/resources/images/dnr-6.png';
import GalleryDnrChild from './GalleryDnrChild';

const GalleryDonors = () => {
      return (
            <div className='p-2 md:pr-2 md:p-0 mt-6'>
                  <div className=''>
                        <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>Happy Donors</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <div className="grid grid-cols-6 gap-3">
                        <GalleryDnrChild
                              image={Dnr1}
                        />
                        <GalleryDnrChild
                              image={Dnr2}
                        />
                        <GalleryDnrChild
                              image={Dnr3}
                        />
                        <GalleryDnrChild
                              image={Dnr4}
                        />
                        <GalleryDnrChild
                              image={Dnr5}
                        />
                        <GalleryDnrChild
                              image={Dnr6}
                        />
                  </div>
            </div>
      );
};

export default GalleryDonors;