import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillCaretDown, AiFillCloseCircle } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from '../../public/resources/images/logo.png';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const MobileNab = () => {
      const [state, setState] = React.useState({
            left: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                  return;
            }
            setState({ ...state, [anchor]: open });
      }
      const list = (anchor) => (
            <Box
                  sx={{ width: 320 }}
                  role="presentation"
                  onClick={toggleDrawer(anchor, false)}
                  onKeyDown={toggleDrawer(anchor, false)}
            >
                  <Button onClick={toggleDrawer(anchor, false)} style={{ float: 'right' }}><AiFillCloseCircle className='text-2xl text-red-600' /></Button>

                  <List>
                        <Link href={'/'}>
                              <ListItem disablePadding >
                                    <ListItemButton>
                                          {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                          <ListItemText primary={'Home'} />
                                    </ListItemButton>
                              </ListItem>
                        </Link>
                        <Divider />

                        <Link href={'/about'}>
                              <ListItem disablePadding >
                                    <ListItemButton>
                                          {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                          <ListItemText primary={'About'} />
                                    </ListItemButton>
                              </ListItem>
                        </Link>
                        <Divider />

                        <Link href={'/contact'}>
                              <ListItem disablePadding >
                                    <ListItemButton>
                                          {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                          <ListItemText primary={'Contact'} />
                                    </ListItemButton>
                              </ListItem>
                        </Link>
                        <Divider />

                        <Link href={'/donate'}>
                              <ListItem disablePadding >
                                    <ListItemButton>
                                          {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                          <ListItemText primary={'Donate'} />
                                    </ListItemButton>
                              </ListItem>
                        </Link>
                        <Divider />
                  </List>

            </Box>
      );
      return (
            <div className='w-full flex md:hidden items-center justify-between gap-8'>
                  <Image src={logo} alt='charity-logo' />

                  {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                              <HiMenuAlt3 onClick={toggleDrawer(anchor, true)} className='block md:hidden font-bold text-4xl cursor-pointer' />
                              <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                              >
                                    {list(anchor)}
                                    <ul className=''>
                                          <li className='flex items-center gap-3 font-medium text-lg pl-4 mb-2'><span>Language</span> <AiFillCaretDown className='text-xl' /></li>
                                          <Divider />
                                          <li className='font-medium text-lg pl-8 mt-3'>Arabic</li>
                                          <li className='font-medium text-lg pl-8 mt-3 mb-3'>English</li>
                                    </ul>

                              </Drawer>
                        </React.Fragment>
                  ))}
            </div>
      );
};

export default MobileNab;