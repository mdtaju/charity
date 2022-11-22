import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const FooterBlgThree = () => {
      return (
            <div className='p-2 md:pr-2 md:p-0'>
                  <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-white'>Useful Links</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <div className="flex flex-col gap-4">
                        <div>
                              <div className='flex items-center gap-3 text-gray-400'>
                                    <p className='text-sm'>Home{" "}</p>
                                    <BsArrowRight />
                              </div>
                              <div className='mt-2 w-2/3 h-[1px] bg-gray-500'></div>
                        </div>
                        <div>
                              <div className='flex items-center gap-3 text-gray-400'>
                                    <p className='text-sm'>About{" "}</p>
                                    <BsArrowRight />
                              </div>
                              <div className='mt-2 w-2/3 h-[1px] bg-gray-500'></div>
                        </div>
                        <div>
                              <div className='flex items-center gap-3 text-gray-400'>
                                    <p className='text-sm'>Contact{" "}</p>
                                    <BsArrowRight />
                              </div>
                              <div className='mt-2 w-2/3 h-[1px] bg-gray-500'></div>
                        </div>
                        <div>
                              <div className='flex items-center gap-3 text-gray-400'>
                                    <p className='text-sm'>Donate{" "}</p>
                                    <BsArrowRight />
                              </div>
                              <div className='mt-2 w-2/3 h-[1px] bg-gray-500'></div>
                        </div>

                  </div>
            </div>
      );
};

export default FooterBlgThree;