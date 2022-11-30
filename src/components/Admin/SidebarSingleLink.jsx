import React from 'react';

const SidebarSingleLink = ({ Icon, title }) => {
      return (
            <li className='sidebar_single_menu'>
                  <Icon
                        className='sidebar_icon_container'
                  />
                  <span className='sidebar_link_name'>{title}</span>
            </li>
      );
};

export default SidebarSingleLink;