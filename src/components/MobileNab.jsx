import { Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillCaretDown, AiFillCloseCircle } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
// import { ImInfo } from 'react-icons/im';
// import { GrContact } from 'react-icons/gr';
// import { FaHandHoldingWater } from 'react-icons/fa';
import logo from '../../public/resources/images/logo.png';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const MobileNab = () => {
      const [state, setState] = React.useState({
            left: false,
      });
      const { push, pathname } = useRouter();
      const { t } = useTranslation('common');
      const handleChangeLan = l => () => {
            push(pathname, undefined, { locale: l })
      }
      const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                  return;
            }
            setState({ ...state, [anchor]: open });
      }
      const list = (anchor) => (
            <>
                  <Button onClick={toggleDrawer(anchor, false)} style={{ width: 'fit-content', marginLeft: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}><AiFillCloseCircle className='text-2xl text-red-600' /></Button>
                  <Box
                        sx={{ width: 320 }}
                        role="presentation"
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                  >

                        <List>
                              <Link href={'/'}>
                                    <ListItem disablePadding >
                                          <ListItemButton>
                                                {/* <ListItemIcon>
                                                <AiOutlineHome />
                                          </ListItemIcon> */}
                                                <ListItemText primary={t("home")} />
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
                                                <ListItemText primary={t("about")} />
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
                                                <ListItemText primary={t("contact")} />
                                          </ListItemButton>
                                    </ListItem>
                              </Link>
                              <Divider />

                              <Link href={'/track'}>
                                    <ListItem disablePadding >
                                          <ListItemButton>
                                                {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                <ListItemText primary={t("track")} />
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
                                                <ListItemText primary={t("donate")} />
                                          </ListItemButton>
                                    </ListItem>
                              </Link>
                              <Divider />
                        </List>

                  </Box>
            </>
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
                                          <li className='flex items-center gap-3 font-medium text-lg pl-4 mb-2'><span>{t("language")}</span> <AiFillCaretDown className='text-xl' /></li>
                                          <Divider />
                                          <li className='font-medium text-lg pl-8 mt-3' onClick={handleChangeLan("ar")}>Arabic</li>
                                          <li className='font-medium text-lg pl-8 mt-3 mb-3' onClick={handleChangeLan("en")}>English</li>
                                    </ul>

                              </Drawer>
                        </React.Fragment>
                  ))}
            </div>
      );
};

export default MobileNab;