import { Avatar } from '@mui/material';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
// import { MdOutlineDirectionsBike } from 'react-icons/md';
import { RiHandHeartLine } from 'react-icons/ri';
import { TbRefreshDot } from 'react-icons/tb';
import SidebarMenu from './SidebarMenu';

const Sidebar = ({ user }) => {
      return (
            <div className='p-4 shadow-lg rounded-md text-center'>
                  <Avatar
                        variant="contained"
                        className="w-fit mx-auto mb-4"
                        src={user.photoUrl}
                        sx={{ height: '70px', width: '70px' }}
                  >{user.displayName.slice(0, 2)}</Avatar>
                  {
                        user.emailVerified ? <button className='px-5 py-2 mb-4 rounded-full border border-green-700 bg-green-200 text-green-700 font-medium'>Profile Verified</button> :
                              <button className='px-5 py-2 mb-4 rounded-full border border-red-700 bg-red-200 text-red-700 font-medium'>Profile Unverified</button>
                  }
                  <SidebarMenu
                        title={"My Profile"}
                        link="/profile"
                        Icon={CgProfile}
                  />
                  <SidebarMenu
                        title={"My Donations"}
                        link="/profile/donations"
                        Icon={RiHandHeartLine}
                  />
                  <SidebarMenu
                        title={"Track Donation"}
                        link="/profile/track"
                        Icon={TbRefreshDot}
                  />

            </div>
      );
};

export default Sidebar;