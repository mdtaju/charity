import Image from 'next/image';
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import Logo from '../../../public/resources/images/logo.png';

const Footer = () => {
      return (
            <footer className='bg-[#222222]'>
                  <div className="container mx-auto p-2 sm:p-4 md:py-8 md:px-6">
                        <div>
                              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                                    <div className='flex flex-col gap-4 text-gray-400 text-sm'>
                                          <Image src={Logo} alt='logo' className='rounded-md' />
                                          <p className='font-thin text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, autem.</p>
                                          <div className='flex flex-col gap-2'>
                                                <div className='flex items-center gap-3'>
                                                      <BiPhoneCall className='text-gray-200' />
                                                      <p>+091887389</p>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                      <HiMail className='text-gray-200' />
                                                      <p>charity@mail.com</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <div className='col-span-2 p-2 md:pr-2 md:p-0'>
                                                <div className='mb-4'>
                                                      <h1 className='mb-2 capitalize font-medium text-xl text-white'>Latest news</h1>
                                                      <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                                                </div>
                                                <div className="flex flex-col gap-4">

                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <div className='col-span-2 p-2 md:pr-2 md:p-0'>
                                                <div className='mb-4'>
                                                      <h1 className='mb-2 capitalize font-medium text-xl text-white'>Useful Links</h1>
                                                      <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                                                </div>
                                                <div className="flex flex-col gap-4">

                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <div className='col-span-2 p-2 md:pr-2 md:p-0'>
                                                <div className='mb-4'>
                                                      <h1 className='mb-2 capitalize font-medium text-xl text-white'>Opening Hours</h1>
                                                      <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                                                </div>
                                                <div className="flex flex-col gap-4">

                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div></div>
                              <div></div>
                        </div>
                  </div>
                  <div className='px-8 py-6 bg-[#333333]'>
                        <h1 className='text-gray-400 text-center'>Copyright 2022 charity all right reserve</h1>
                  </div>
            </footer>
      );
};

export default Footer;