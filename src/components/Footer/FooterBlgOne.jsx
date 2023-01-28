import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/resources/images/logo-2.svg';
const FooterBlgOne = () => {
      return (
            <div className='flex flex-col gap-4'>
                  <Image src={Logo} alt='logo' className='rounded-md mb-4' />
            </div>
      );
};

export default FooterBlgOne;