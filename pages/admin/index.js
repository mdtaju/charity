import { CircularProgress } from '@mui/material';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import cookie from 'js-cookie';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MdPhoneAndroid } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import Logo from '../../public/resources/images/fav.svg';
import styles from '../../styles/Admin.module.scss';

const Admin = () => {
      const { t } = useTranslation('admin');
      const [isLoading, setIsLoading] = useState(false);
      const [errorMss, setErrorMss] = useState("");
      const [adminInput, setAdminInput] = useState({
            phone: '',
            password: ''
      })
      const router = useRouter();
      const handleChange = ({ target: { name, value } }) => {
            setAdminInput({ ...adminInput, [name]: value })
      }
      const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            try {
                  const res = await axios.post('/api/admin', {
                        phone: adminInput.phone,
                        password: adminInput.password
                  })
                  const { token, user } = res.data;
                  const { name, role } = user;
                  const hashRole = await bcrypt.hash(role, 5);
                  cookie.set('token', token);
                  cookie.set('name', name);
                  cookie.set('role', hashRole);
                  setErrorMss("");
                  router.push("/admin/dashboard")
            } catch (error) {
                  setErrorMss(t("adminLoginErr"))
                  setIsLoading(false);
            }
      }
      return (
            <div className='grid place-items-center bg-[#dee1e7] min-h-screen w-screen'>
                  <div className={styles.admin_login_content}>
                        <div className={styles.admin_login_img}>
                              {
                                    isLoading ?
                                          <div className='mx-auto w-fit mt-2'>
                                                <CircularProgress color="primary" />
                                          </div> :
                                          <Link href={'/'}>
                                                <Image src={Logo} alt="Logo" priority={true} />
                                          </Link>
                              }
                        </div>
                        <h1 className='text-lg font-semibold text-gray-500 text-center mt-4'>{t("adminMainTitle")}</h1>
                        <div className='w-full h-[1px] bg-[#0A5174] rounded-lg mb-4'></div>

                        <form onSubmit={handleSubmit}>
                              <div className={styles.admin_login_field}>
                                    <MdPhoneAndroid className={styles.admin_login_icon} />
                                    <input
                                          required
                                          type="text"
                                          name="phone"
                                          className='w-full px-2 py-2 outline-none border border-gray-500 focus:border-[#0A5174] rounded-md mb-4'
                                          placeholder={t("adminPhone")}
                                          onChange={handleChange}
                                    />
                              </div>
                              <div className={styles.admin_login_field}>
                                    <RiLockPasswordLine className={styles.admin_login_icon} />
                                    <input
                                          required
                                          type="password"
                                          name="password"
                                          className='w-full px-2 py-2 outline-none border border-gray-500 focus:border-[#0A5174] rounded-md mb-4'
                                          placeholder={t("adminPassword")}
                                          onChange={handleChange}
                                    />
                              </div>
                              <button type='submit' className={styles.admin_login_btn}>{t("submit")}</button>
                              {errorMss &&
                                    <p className='text-center text-red-600 font-bold mt-4'>{errorMss}</p>
                              }

                        </form>
                  </div>
            </div>
      );
};

export async function getServerSideProps({ locale }) {
      return {
            props: {
                  ...(await serverSideTranslations(locale, [
                        'common',
                        'admin',
                  ])),
            }
      }
}

export default Admin;