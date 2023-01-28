import { useTranslation } from 'next-i18next';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsSnapchat } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
const FooterBlgFour = () => {
      const { t } = useTranslation('common');
      return (
            <div className='p-2 md:pr-2 md:p-0'>
                  <div>
                        <h1 className='text-gray-200 text-base font-thin mb-3'>{t("footerContactTitle")}</h1>
                        <div className='flex items-center gap-2'>
                              <a target={'_blank'} rel="noreferrer" href={'https://www.facebook.com/profile.php?id=100085171167052&mibextid=ZbWKwL'}>
                                    <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><GrFacebookOption className='text-lg' /></div>
                              </a>

                              <a target={'_blank'} rel="noreferrer" href={'https://www.instagram.com/mashru3_rahma'}>
                                    <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiFillInstagram className='text-lg' /></div>
                              </a>

                              <a target={'_blank'} rel="noreferrer" href={'https://www.twitter.com/@Mashru3_Rahma'}>
                                    <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiOutlineTwitter className='text-lg' /></div>
                              </a>

                              <a target={'_blank'} rel="noreferrer" href={'https://www.snapchat.com/add/mashru3rahmh'}>
                                    <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><BsSnapchat className='text-lg' /></div>
                              </a>
                        </div>
                  </div>
            </div>
      );
};

export default FooterBlgFour;