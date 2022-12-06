import { Avatar, Popover } from '@mui/material';
import Badge from '@mui/material/Badge';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
// import { CgProfile } from 'react-icons/cg';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { HiOutlineBell } from 'react-icons/hi';

const AdminTopNav = ({ handler }) => {
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };
      const goProfile = () => {
            router.replace(`/profile`)
      }

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
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
                              {/* <CgProfile className='text-2xl' /> */}
                              <div className='flex flex-col w-fit h-fit'>
                                    <Avatar
                                          aria-describedby={id}
                                          variant="contained"
                                          onClick={handleClick}
                                          className="cursor-pointer"
                                    // src={currentUser.photoUrl}
                                    >admin</Avatar>
                                    <Popover
                                          className='w-[300px]'
                                          id={id}
                                          open={open}
                                          anchorEl={anchorEl}
                                          onClose={handleClose}
                                          elevation={16}
                                          anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                          }}
                                          transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                          }}
                                    >
                                          <div className='px-4 py-6 flex flex-col gap-4 w-[180px]'>
                                                <div>
                                                      <p className='text-base text-[#0A5174] font-semibold text-center truncate'>name </p>
                                                </div>
                                                <button className='btn_primary rounded-full' >Logout</button>
                                          </div>
                                    </Popover>
                              </div>
                        </li>
                  </ul>
            </div>
      );
};

export default AdminTopNav;