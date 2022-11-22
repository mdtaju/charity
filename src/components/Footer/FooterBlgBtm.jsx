import React from 'react';

const FooterBlgBtm = () => {
      return (
            <div className=' bg-[#333333]'>
                  <div className='container mx-auto flex flex-col gap-4 sm:flex-row items-center justify-between px-8 py-4'>
                        <p className='text-sm text-center sm:text-left text-gray-400 font-thin'>Copyright ©2022 Charity. All Rights Reserved</p>
                        <div className='flex gap-6'>
                              <p className='text-sm text-gray-400 font-thin underline cursor-pointer'>Privacy Policy</p>
                              <p className='text-sm text-gray-400 font-thin underline cursor-pointer'>Terms & Condition</p>
                        </div>
                  </div>
            </div>
      );
};

export default FooterBlgBtm;