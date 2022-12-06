import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import logo from '../../public/resources/images/logo.svg';
import MobileNab from './MobileNab';

// import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
      // const useLink = useRouter();
      // const { currentUser, logout } = useAuth();
      // const router = useRouter();
      // console.log(currentUser)
      // const [anchorEl, setAnchorEl] = React.useState(null);

      // const handleClick = (event) => {
      //       setAnchorEl(event.currentTarget);
      // };

      // const handleClose = () => {
      //       setAnchorEl(null);
      // };
      // const goProfile = () => {
      //       router.replace(`/profile`)
      // }

      // const open = Boolean(anchorEl);
      // const id = open ? 'simple-popover' : undefined;

      return (
            <div className='bg-white w-full p-4 md:py-3 md:px-4 fixed top-0 right-0 left-0 shadow-md z-40'>
                  <div className='container mx-auto flex justify-between items-center'>
                        <div className='hidden md:flex items-center gap-8'>
                              <Image src={logo} alt='charity-logo' priority={true} />
                              <ul className='flex items-center gap-4 font-medium text-sm uppercase'>
                                    <Link href={'/'}>
                                          <li className='tail_navbar_link'>Home</li>
                                    </Link>
                                    <Link href={'/about'}>
                                          <li className='tail_navbar_link'>About</li>
                                    </Link>
                                    <Link href={'/contact'}>
                                          <li className='tail_navbar_link'>Contact</li>
                                    </Link>
                                    <Link href={'/track'}>
                                          <li className='tail_navbar_link'>Track</li>
                                    </Link>

                              </ul>
                        </div>
                        <ul className='hidden md:flex items-center gap-4 font-medium text-sm'>
                              <li className='cursor-pointer group/drop'>
                                    <div className='flex items-center gap-2'>
                                          <GrLanguage />
                                          {" "}ENG{" "}
                                          <AiFillCaretDown className='group-hover/drop:rotate-180 duration-200' />
                                    </div>
                                    <div className='fixed shadow-md bg-white rounded-sm p-3 hidden group-hover/drop:block'>
                                          <p className='mt-1 tail_navbar_lan_link'>Arabic</p>
                                          <p className='mt-2 tail_navbar_lan_link'>English</p>
                                    </div>
                              </li>
                              <Link href={'/donate'}>
                                    <li className='btn_primary'>Donate</li>
                              </Link>
                              {
                                    // currentUser ? <>
                                    //       <Avatar
                                    //             aria-describedby={id}
                                    //             variant="contained"
                                    //             onClick={handleClick}
                                    //             className="cursor-pointer"
                                    //             src={currentUser.photoUrl}
                                    //       >{currentUser.displayName.slice(0, 2)}</Avatar>
                                    //       <Popover
                                    //             className='w-[300px]'
                                    //             id={id}
                                    //             open={open}
                                    //             anchorEl={anchorEl}
                                    //             onClose={handleClose}
                                    //             elevation={16}
                                    //             anchorOrigin={{
                                    //                   vertical: 'bottom',
                                    //                   horizontal: 'right',
                                    //             }}
                                    //             transformOrigin={{
                                    //                   vertical: 'top',
                                    //                   horizontal: 'right',
                                    //             }}
                                    //       >
                                    //             <div className='px-4 py-6 flex flex-col gap-4 w-[180px]'>
                                    //                   <div>
                                    //                         <p className='text-base text-[#0A5174] font-semibold text-center truncate'>{currentUser.displayName} </p>
                                    //                         <p className='truncate text-sm text-gray-500 font-semibold'>{currentUser.email}</p>
                                    //                   </div>
                                    //                   {/* <Link href={`/users/${currentUser.uid}`}> */}
                                    //                   <button onClick={goProfile} className='btn_primary rounded-full bg-transparent opacity-100 border border-[#0A5174] text-[#0A5174] hover:bg-[#0A5174] hover:text-white'>View Profile</button>
                                    //                   {/* </Link> */}
                                    //                   <button className='btn_primary rounded-full' onClick={logout}>Logout</button>

                                    //             </div>
                                    //       </Popover></>
                                    //       :
                                    //       <>
                                    //             <Link href={'/login'}><li className='btn_primary bg-transparent border border-[#0A5174] text-[#0A5174] hover:bg-[#0A5174] hover:text-white opacity-100 hover:opacity-80'>Login</li></Link>
                                    //             <Link href={'/signup'}><li className='btn_primary'>Signup</li></Link>
                                    //       </>
                              }
                        </ul>
                        {/* for tab and mobile device */}
                        <MobileNab />
                  </div>
            </div>
      );
};

export default Navbar;