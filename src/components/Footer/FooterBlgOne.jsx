import Image from 'next/image';
import React from 'react';
import { HiMail } from 'react-icons/hi';
import Logo from '../../../public/resources/images/logo-2.svg';
const FooterBlgOne = () => {
      return (
            <div className='flex flex-col gap-4 text-gray-400 text-sm'>
                  <Image src={Logo} alt='logo' className='rounded-md mb-4' />
                  <p className='font-thin text-sm'>{`It’s a project of the National Committee Released Prisoners and Their Families’ care "Tarahum", It’s based on collecting used clothes, utensils, papers and devices and recycling them in the purpose of providing what can still be used by Tarahum’s beneficiaries, and that’s for achieving social and environmental investment.`}</p>
                  <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-3'>
                              <HiMail className='text-gray-200' />
                              <p>charity@mail.com</p>
                        </div>
                  </div>
            </div>
      );
};

export default FooterBlgOne;