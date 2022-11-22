import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

const FooterBlgMdl = () => {
      return (
            <>
                  <div className='col-span-2 py-4'>
                        <div className='flex items-center justify-between w-full sm:w-3/4 bg-white text-black rounded-sm'>
                              <input type="text" placeholder='Enter your email' className='w-full h-full px-3 outline-none border-none ' />
                              <button className='btn_primary'>Subscribe</button>
                        </div>
                  </div>
                  <div>
                        <h1 className='text-gray-200 text-base font-thin mb-3'>Call us now</h1>
                        <p className='text-gray-500 text-sm font-thin mb-1'>+092839876</p>
                        <p className='text-gray-500 text-sm font-thin'>+092839876</p>
                  </div>
                  <div>
                        <h1 className='text-gray-200 text-base font-thin mb-3'>Connect with us</h1>
                        <div className='flex items-center gap-2'>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><GrFacebookOption className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiFillInstagram className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiOutlineTwitter className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiFillYoutube className='text-lg' /></div>
                        </div>
                  </div>
            </>
      );
};

export default FooterBlgMdl;