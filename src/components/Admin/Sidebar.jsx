import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/resources/images/fav.svg';
import SidebarNav from './SidebarNav';

const Sidebar = ({ getRef }) => {
      return (
            <div ref={getRef} className='sidebar'>
                  <div className='admin_logo_details flex items-center justify-between w-full p-[14px]'>
                        <Link href={'/'}>
                              <Image width={30} height={30} className='admin_logo' src={Logo} alt="logo" />
                        </Link>
                        <span className='logo_title'>Admin Dashboard</span>
                  </div>
                  <SidebarNav />
            </div>
      );
};

export default Sidebar;