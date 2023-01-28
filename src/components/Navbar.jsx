import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import logo2 from '../../public/resources/images/logo-gov.svg';
import logo from '../../public/resources/images/logo.svg';
import MobileNab from './MobileNab';

const Navbar = () => {

      const { push, pathname } = useRouter();
      const { t } = useTranslation('common');
      const handleChangeLan = l => () => {
            push(pathname, undefined, { locale: l })
      }
      return (
            <div className='bg-white w-full p-4 md:py-3 md:px-4 fixed top-0 right-0 left-0 shadow-md z-40'>
                  <div className='container mx-auto flex justify-between items-center'>
                        <div className='hidden md:flex items-center gap-8'>
                              <div className='flex w-fit items-center gap-4'>
                                    <Link href={'/'}>
                                          <Image src={logo} alt='charity-logo' priority={true} />
                                    </Link>
                                    <a href="https://donate.trahum.org.sa/" alt="trahum" target={"_blank"} rel="noreferrer">
                                          <Image src={logo2} alt='charity-logo' priority={true} className='h-[60px] w-fit' />
                                    </a>
                              </div>
                              <ul className='flex items-center gap-4 font-medium text-sm uppercase'>
                                    <Link href={'/'}>
                                          <li className='tail_navbar_link'>{t("home")}</li>
                                    </Link>
                                    <Link href={'/about'}>
                                          <li className='tail_navbar_link'>{t("about")}</li>
                                    </Link>
                                    <Link href={'/contact'}>
                                          <li className='tail_navbar_link'>{t("contact")}</li>
                                    </Link>
                                    <Link href={'/track'}>
                                          <li className='tail_navbar_link'>{t("track")}</li>
                                    </Link>

                              </ul>
                        </div>
                        <ul className='hidden md:flex items-center gap-4 font-medium text-sm'>
                              <li className='cursor-pointer group/drop'>
                                    <div className='flex items-center gap-2'>
                                          <GrLanguage />
                                          {" "}{t("language")}{" "}
                                          <AiFillCaretDown className='group-hover/drop:rotate-180 duration-200' />
                                    </div>
                                    <div className='fixed shadow-md bg-white rounded-sm p-3 hidden group-hover/drop:block'>
                                          <p className='mt-1 tail_navbar_lan_link' onClick={handleChangeLan("ar")}>Arabic</p>
                                          <p className='mt-2 tail_navbar_lan_link' onClick={handleChangeLan("en")}>English</p>
                                    </div>
                              </li>
                              <Link href={'/donate'}>
                                    <li className='btn_primary'>{t("donate")}</li>
                              </Link>

                        </ul>
                        {/* for tab and mobile device */}
                        <MobileNab />
                  </div>
            </div>
      );
};

export default Navbar;