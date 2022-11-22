import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import logo from '../../public/resources/images/logo.svg';
import MobileNab from './MobileNab';

// import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
      const useLink = useRouter();
      // console.log(useLink);

      return (
            <div className='bg-white w-full p-4 md:py-3 md:px-4 fixed top-0 right-0 left-0 shadow-md z-40'>
                  <div className='container mx-auto flex justify-between items-center'>
                        <div className='hidden md:flex items-center gap-8'>
                              <Image src={logo} alt='charity-logo' />
                              <ul className='flex items-center gap-8 font-medium text-sm uppercase'>
                                    <Link href={'/'}>
                                          <li className='tail_navbar_link'>Home</li>
                                    </Link>
                                    <Link href={'/about'}>
                                          <li className='tail_navbar_link'>About</li>
                                    </Link>
                                    <Link href={'/contact'}>
                                          <li className='tail_navbar_link'>Contact</li>
                                    </Link>

                              </ul>
                        </div>
                        <ul className='hidden md:flex items-center gap-8 font-medium text-sm'>
                              <li className='cursor-pointer group/drop'>
                                    <div className='flex items-center gap-2'>
                                          <GrLanguage />
                                          {" "}ENG{" "}
                                          <AiFillCaretDown className='group-hover/drop:rotate-180 duration-200' />
                                    </div>
                                    <div className='fixed shadow-md bg-white rounded-sm p-3 hidden group-hover/drop:block'>
                                          <p className='mt-1 tail_navbar_lan_link'>Arabic</p>
                                          <p className='mt-2 tail_navbar_lan_link'>English</p>
                                    </div>
                              </li>

                              <Link href={'/donate'}><li className='btn_primary'>Donate</li></Link>
                        </ul>
                        {/* for tab and mobile device */}
                        <MobileNab />
                  </div>
            </div>
      );
};

export default Navbar;