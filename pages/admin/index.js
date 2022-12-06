import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/resources/images/fav.svg';

const Admin = () => {
      const [adminInput, setAdminInput] = useState({
            user_name: '',
            password: ''
      })
      const handleChange = ({ target: { name, value } }) => {
            setAdminInput({ ...adminInput, [name]: value })
      }
      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const res = await axios.post('/api/admin', {
                        user_name: adminInput.user_name,
                        password: adminInput.password
                  })
                  console.log(res)
            } catch (error) {
                  console.log(error)
            }
      }
      return (
            <div className='grid place-items-center min-h-screen w-screen'>
                  <div className='w-[320px] bg-gray-50 rounded-md shadow-md px-4 py-6'>
                        <div className='flex items-end gap-4 w-fit mx-auto mb-3'>
                              <Link href={'/'}>
                                    <Image width={30} height={30} src={Logo} alt="Logo" />
                              </Link>
                              <h1 className='text-lg font-semibold text-gray-500'>Admin Login</h1>
                        </div>
                        <div className='w-full h-[1px] bg-[#0A5174] rounded-lg mb-4'></div>
                        <form onSubmit={handleSubmit}>
                              <label
                                    htmlFor="userName"
                                    className='mb-2 text-gray-500 text-sm font-semibold'
                              >User Name:
                              </label>
                              <input
                                    type="text"
                                    name="user_name"
                                    className='w-full px-2 py-2 outline-none border border-gray-500 focus:border-[#0A5174] rounded-md mb-4'
                                    placeholder='Enter your username'
                                    onChange={handleChange}
                              />
                              <label
                                    htmlFor="password"
                                    className='mb-2 text-gray-500 text-sm font-semibold'
                              >Password:
                              </label>
                              <input
                                    type="password"
                                    name="password"
                                    className='w-full px-2 py-2 outline-none border border-gray-500 focus:border-[#0A5174] rounded-md mb-4'
                                    placeholder='Enter your password'
                                    onChange={handleChange}
                              />
                              <button className='btn_primary w-full'>Submit</button>
                        </form>
                  </div>
            </div>
      );
};

export default Admin;