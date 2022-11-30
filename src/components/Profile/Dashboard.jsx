import { Avatar } from '@mui/material';
import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
      const { currentUser } = useAuth();
      return (
            <div className='grid grid-cols-1 sm:grid-cols-6'>
                  <div className="col-span-2">
                        <div className='flex flex-col gap-4 items-center w-full mb-6 sm:mb-0 sm:w-fit'>
                              <Avatar
                                    variant="contained"
                                    className="w-fit"
                                    src={currentUser.photoUrl}
                                    sx={{ height: '120px', width: '120px' }}
                              >{currentUser.displayName.slice(0, 2)}</Avatar>
                              <button className='btn_primary rounded-md'>Edit Profile</button>
                        </div>
                  </div>
                  <div className="col-span-4">
                        <h1 className='text-sm text-[#0A5174] font-semibold mb-1'>Full Name: </h1>
                        <p className='text-xl text-gray-600 font-medium mb-4'>{currentUser.displayName}</p>
                        <h1 className='text-sm text-[#0A5174] font-semibold mb-1'>Email: </h1>
                        <p className='text-xl text-gray-600 font-medium mb-2'>{currentUser.email}</p>
                        <button className='text-xs font-medium bg-green-200 border border-green-600 text-green-600 px-3 py-1 rounded-full mb-4'>Verify your email</button>
                        <h1 className='text-sm text-[#0A5174] font-semibold mb-1'>Phone: </h1>
                        <p className='text-xl text-gray-600 font-medium mb-4'>null</p>
                        <h1 className='text-sm text-[#0A5174] font-semibold mb-1'>City: </h1>
                        <p className='text-xl text-gray-600 font-medium mb-4'>null</p>
                        <h1 className='text-sm text-[#0A5174] font-semibold mb-1'>Address: </h1>
                        <p className='text-xl text-gray-600 font-medium mb-4'>null</p>

                  </div>
            </div>
      );
};

export default Dashboard;