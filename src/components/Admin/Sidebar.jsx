import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../../../public/resources/images/fav.svg';
import SidebarNav from './SidebarNav';

const Sidebar = ({ getRef }) => {
      const router = useRouter();
      const goHome = () => {

      }
      return (
            <div ref={getRef} className='sidebar'>
                  <div className='admin_logo_details flex items-center justify-between w-full p-[14px]'>
                        {/* <div >
                              <Link href={'/'} > */}
                        <Image width={30} height={30} src={Logo} alt="logo" className='admin_logo cursor-pointer' onClick={() => { router.replace('/') }} />
                        {/* </Link>
                        </div> */}
                        <span className='logo_title'>Admin Dashboard</span>
                  </div>
                  <SidebarNav />
            </div>
      );
};

export default Sidebar;