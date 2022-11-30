import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineDirectionsBike } from 'react-icons/md';
import { RiHandCoinLine } from 'react-icons/ri';
import { TbLayoutDashboard } from 'react-icons/tb';
import SidebarMultipleMenu from './SidebarMultipleMenu';
import SidebarSingleLink from './SidebarSingleLink';

const SidebarNav = () => {
      return (
            <ul className='sidebar_nav_links'>
                  <SidebarSingleLink
                        Icon={TbLayoutDashboard}
                        title={"Dashboard"}
                  />
                  {/* <SidebarMultipleMenu 
                        Icon={AiFillCaretDown}
                        title={"Donations"}
                        options={["Option One", "Option Two", "Option Three"]}
                  /> */}
                  <SidebarMultipleMenu
                        Icon={RiHandCoinLine}
                        title={"Donations"}
                        options={["Option One", "Option Two", "Option Three"]}
                  />
                  <SidebarMultipleMenu
                        Icon={MdOutlineDirectionsBike}
                        title={"Drivers"}
                        options={["Option One", "Option Two", "Option Three"]}
                  />
                  <SidebarMultipleMenu
                        Icon={BsPeople}
                        title={"Users"}
                        options={["Option One", "Option Two", "Option Three"]}
                  />
            </ul>
      );
};

export default SidebarNav;