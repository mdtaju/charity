import Link from 'next/link';
import React from 'react';

const SidebarSingleLink = ({ Icon, title, link }) => {
      return (
            <>
                  <Link href={link}>
                        <li className='sidebar_single_menu'>
                              <Icon
                                    className='sidebar_icon_container'
                              />
                              <span className='sidebar_link_name'>{title}</span>
                        </li>
                  </Link>
            </>
      );
};

export default SidebarSingleLink;