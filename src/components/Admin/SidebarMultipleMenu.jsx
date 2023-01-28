import { IconButton } from '@mui/material';
import Link from 'next/link';
import React, { useRef } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const SidebarMultipleMenu = ({ Icon, title, options }) => {
      const getRef = useRef();
      const handleToggle = () => {
            getRef.current.classList.toggle('showMenu')
      }
      return (
            <li ref={getRef} className="sidebar_multiple_menu_li">
                  <div className='sidebar_icon_link'>
                        <div className='flex items-center sidebar_multiple_menu'>
                              <Icon
                                    className='sidebar_icon_container'
                              />
                              <span className='sidebar_link_name'>{title}</span>
                        </div>
                        <IconButton onClick={handleToggle} size='small' className='arrow_icon_container'>
                              <AiFillCaretDown className='drop_arrow' />
                        </IconButton>
                  </div>
                  <ul className='sidebar_sub_menu'>
                        {
                              options.map((option, i) => (
                                    <li className="multiple_menu_link" key={i}>
                                          <Link href={option.link}>
                                                <p className='sidebar_link_name cursor-pointer'>{option.name}</p>
                                          </Link>
                                    </li>
                              ))
                        }
                  </ul>
            </li>
      );
};

export default SidebarMultipleMenu;