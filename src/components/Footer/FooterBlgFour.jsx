import React from 'react';

const FooterBlgFour = () => {
      return (
            <div className='p-2 md:pr-2 md:p-0'>
                  <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-white'>Opening Hours</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <div className="flex flex-col gap-4">
                        <div>
                              <div className='flex items-center justify-between gap-3 text-gray-400'>
                                    <p className='text-sm'>Mon - Tues :{" "}</p>
                                    <p className='text-sm'>6.00 am - 10.00 pm</p>
                              </div>
                              <div className='mt-2 w-full h-[1px] bg-gray-500'></div>
                        </div>
                        <div>
                              <div className='flex items-center justify-between gap-3 text-gray-400'>
                                    <p className='text-sm'>Wednes - Thurs :{" "}</p>
                                    <p className='text-sm'>6.00 am - 10.00 pm</p>
                              </div>
                              <div className='mt-2 w-full h-[1px] bg-gray-500'></div>
                        </div>
                        <div>
                              <div className='flex items-center justify-between gap-3 text-gray-400'>
                                    <p className='text-sm'>Fri :{" "}</p>
                                    <p className='text-sm'>6.00 am - 10.00 pm</p>
                              </div>
                              <div className='mt-2 w-full h-[1px] bg-gray-500'></div>
                        </div>
                        <div>
                              <div className='flex items-center justify-between gap-3 text-gray-400'>
                                    <p className='text-sm'>Sun :{" "}</p>
                                    <p className='text-sm'>6.00 am - 10.00 pm</p>
                              </div>
                              <div className='mt-2 w-full h-[1px] bg-gray-500'></div>
                        </div>
                  </div>
            </div>
      );
};

export default FooterBlgFour;