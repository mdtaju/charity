import Badge from '@mui/material/Badge';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { HiOutlineBell } from 'react-icons/hi';

const AdminTopNav = ({ handler }) => {
      return (
            <div className='sticky top-0 right-0 w-full h-[60px] bg-white border-b border-gray-200 py-2 px-4 flex justify-between items-center z-40'>
                  <div className='flex gap-4 items-center text-2xl'>
                        <FiArrowLeftCircle
                              className='cursor-pointer text-gray-600'
                              onClick={handler}
                        />
                  </div>
                  <ul className='hidden md:flex items-center gap-6 font-semibold text-base text-gray-600'>
                        <li className='cursor-pointer group/drop'>
                              <div className='flex items-center gap-2'>
                                    <GrLanguage className='text-gray-600' />
                                    {" "}ENG{" "}
                                    <AiFillCaretDown className='group-hover/drop:rotate-180 duration-200' />
                              </div>
                              <div className='fixed shadow-md bg-white rounded-sm p-3 hidden group-hover/drop:block'>
                                    <p className='mt-1 tail_navbar_lan_link'>Arabic</p>
                                    <p className='mt-2 tail_navbar_lan_link'>English</p>
                              </div>
                        </li>
                        <li className='cursor-pointer text-2xl'>
                              <Badge color="primary" badgeContent={5}>

                                    <HiOutlineBell />
                              </Badge>
                        </li>
                        <li className='cursor-pointer flex items-center gap-2'>
                              <CgProfile className='text-2xl' />
                              <div className='flex flex-col w-fit h-fit'>
                                    <p className='text-sm font-semibold text-[#0A5174]'>Jon Doe</p>
                                    <p className='text-xs font-semibold text-gray-500'>Admin</p>
                              </div>
                        </li>
                  </ul>
            </div>
      );
};

export default AdminTopNav;