import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsSnapchat } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';

const FooterBlgMdl = () => {
      return (
            <>
                  <div>
                        <h1 className='text-gray-200 text-base font-thin mb-3'>Call us now</h1>
                        <p className='text-gray-500 text-sm font-thin mb-1'>+0580055000</p>
                        <p className='text-gray-500 text-sm font-thin'>+0561699222</p>
                  </div>
                  <div>
                        <h1 className='text-gray-200 text-base font-thin mb-3'>Connect with us</h1>
                        <div className='flex items-center gap-2'>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><GrFacebookOption className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiFillInstagram className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiOutlineTwitter className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><BsSnapchat className='text-lg' /></div>
                        </div>
                  </div>
            </>
      );
};

export default FooterBlgMdl;