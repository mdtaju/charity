import { useTranslation } from 'next-i18next';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsSnapchat, BsTelephone } from 'react-icons/bs';
import { GrFacebookOption, GrMapLocation } from 'react-icons/gr';

// import { IoLogoSkype } from 'react-icons/io';
// import { TfiEmail } from 'react-icons/tfi';
import ContactInfoChild from './ContactInfoChild';


const ContactInfo = () => {
      const { t } = useTranslation("contact");
      return (
            <div className='p-2'>
                  <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>{t("contactInfoTitle")}</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <div className="flex flex-col gap-4">
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
                        <ContactInfoChild
                              Icon={GrMapLocation}
                              title={t("contactInfoLocationTitle")}
                              info={t("contactInfoLocation")}
                        />
                        <ContactInfoChild
                              Icon={BsTelephone}
                              title={t("contactInfoPhoneTitle")}
                              info={t("contactInfoPhoneOne")}
                              infoTwo={t("contactInfoPhoneTwo")}
                        />
                        {/* <ContactInfoChild
                              Icon={TfiEmail}
                              title="Email Address"
                              info="#405, Lan Streen, Tabuk, KSA"
                        />
                        <ContactInfoChild
                              Icon={IoLogoSkype}
                              title="Make a Video Call"
                              info="#405, Lan Streen, Tabuk, KSA"
                        /> */}
                  </div>
            </div>
      );
};

export default ContactInfo;