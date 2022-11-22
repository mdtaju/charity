import Image from 'next/image';
import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import Logo from '../../../public/resources/images/logo-2.svg';
const FooterBlgOne = () => {
      return (
            <div className='flex flex-col gap-4 text-gray-400 text-sm'>
                  <Image src={Logo} alt='logo' className='rounded-md mb-4' />
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
      );
};

export default FooterBlgOne;