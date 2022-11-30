import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GrFacebookOption, GrMapLocation } from 'react-icons/gr';
// import { IoLogoSkype } from 'react-icons/io';
// import { TfiEmail } from 'react-icons/tfi';
import ContactInfoChild from './ContactInfoChild';


const ContactInfo = () => {
      return (
            <div className='p-2'>
                  <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>Get in touch with us</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <div className="flex flex-col gap-4">
                        <p className='text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro saepe vel dolorem doloribus excepturi doloremque pariatur repellendus, facere asperiores?</p>
                        <div className='flex items-center gap-2'>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><GrFacebookOption className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiFillInstagram className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiOutlineTwitter className='text-lg' /></div>
                              <div className='p-2 bg-gray-500 cursor-pointer rounded-full text-white hover:text-[#0A5174]'><AiFillYoutube className='text-lg' /></div>
                        </div>
                        <ContactInfoChild
                              Icon={GrMapLocation}
                              title="Our Office Location"
                              info="Riyadh, 0580055000"
                        />
                        <ContactInfoChild
                              Icon={BsTelephone}
                              title="Contact Number"
                              info="Hail 0561699222"
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