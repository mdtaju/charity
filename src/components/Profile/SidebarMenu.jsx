import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SidebarMenu = ({ title, link, Icon }) => {
      const router = useRouter();
      const [navStyle, setNavStyle] = useState({
            background: 'transparent',
      })
      useEffect(() => {
            function activeStyle() {
                  if (router.pathname === link) {
                        setNavStyle({
                              background: "#0A5174",
                              color: "white"
                        })
                  } else {
                        setNavStyle({
                              background: 'transparent',
                        })
                  }
            }
            activeStyle();
      }, [link, router])
      return (
            <Link href={link}>
                  <div style={navStyle} className='w-full px-6 py-3 rounded-md bgl-[#0A5174] flex items-center gap-4 text-gray-500 text-lg font-medium cursor-pointer mt-2'>
                        <Icon className="text-xl" />
                        <h1>{title}</h1>
                  </div>
            </Link>
      );
};

export default SidebarMenu;