import { Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenuAlt2 } from 'react-icons/hi';
import { UseRole } from '../../hoke/useRole';
// import { ImInfo } from 'react-icons/im';

const MobileNab = () => {
      const URole = UseRole();
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
                              <Link href={'/admin/dashboard'}>
                                    <ListItem disablePadding >
                                          <ListItemButton>
                                                {/* <ListItemIcon>
                                                <AiOutlineHome />
                                          </ListItemIcon> */}
                                                <ListItemText primary={"Dashboard"} />
                                          </ListItemButton>
                                    </ListItem>
                              </Link>
                              <Divider />

                              {
                                    URole !== "Customer-Service" &&
                                    <>
                                          <Link href={'/admin/warehouse'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Warehouse List"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />

                                          <Link href={'/admin/warehouse/warehouse-update'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Warehouse Update"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />

                                          <Link href={'/admin/warehouse/sku-create'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"SKU Create"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />
                                    </>
                              }



                              <Link href={'/admin/donations'}>
                                    <ListItem disablePadding >
                                          <ListItemButton>
                                                {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                <ListItemText primary={"All Donations"} />
                                          </ListItemButton>
                                    </ListItem>
                              </Link>
                              <Divider />

                              {
                                    (URole !== "Operation" && URole !== "Default") &&
                                    <>
                                          <Link href={'/admin/donations/make-donation'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Make Donation"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />
                                    </>
                              }


                              {
                                    (URole !== "Default") &&
                                    <>
                                          <Link href={'/admin/donations/track-donations'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Track Donations"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />
                                          <Link href={'/admin/drivers'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"All Drivers"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />
                                    </>
                              }

                              {
                                    (URole === "Super-Admin" || URole === "Admin") &&
                                    <>
                                          <Link href={'/admin/drivers/make-driver'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Make Driver"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />

                                          <Link href={'/admin/drivers/track-drivers'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Track Drivers"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />
                                    </>
                              }

                              {
                                    (URole === "Super-Admin") &&
                                    <>
                                          <Link href={'/admin/admins'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"All Admins"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />

                                          <Link href={'/admin/admins/make-admin'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Make Admin"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />

                                          <Link href={'/admin/admins/upload-image'}>
                                                <ListItem disablePadding >
                                                      <ListItemButton>
                                                            {/* <ListItemIcon>
                                                <span>About</span>
                                          </ListItemIcon> */}
                                                            <ListItemText primary={"Upload Image"} />
                                                      </ListItemButton>
                                                </ListItem>
                                          </Link>
                                          <Divider />
                                    </>
                              }

                        </List>
                  </Box>
            </>
      );
      return (
            <div className='w-full flex sm:hidden items-center justify-between gap-8'>
                  {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                              <HiMenuAlt2 onClick={toggleDrawer(anchor, true)} className='block md:hidden font-bold text-4xl cursor-pointer' />
                              <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                              >
                                    {list(anchor)}
                              </Drawer>
                        </React.Fragment>
                  ))}
            </div>
      );
};

export default MobileNab;