import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../../../public/resources/images/fav.svg';
import SidebarNav from './SidebarNav';

const Sidebar = ({ getRef }) => {
      const { t } = useTranslation('common_dashboard');
      const router = useRouter();
      return (
            <div ref={getRef} className='sidebar hidden sm:block'>
                  <div className='admin_logo_details flex items-center justify-between w-full p-[14px]'>
                        {/* <div >
                              <Link href={'/'} > */}
                        <Image width={30} height={30} src={Logo} alt="logo" className='admin_logo cursor-pointer' onClick={() => { router.replace('/admin/dashboard') }} />
                        {/* </Link>
                        </div> */}
                        <span className='logo_title'>{t("mainTitle")}</span>
                  </div>
                  <SidebarNav />
            </div>
      );
};

export default Sidebar;