import Snackbar from '@mui/material/Snackbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Logo from '../public/resources/images/fav.svg';
import GoogleLogo from '../public/resources/images/google-logo.svg';
import { useAuth } from '../src/components/AuthContext';
import Input from '../src/components/Input';

const Signup = () => {
      const [userInfo, setUserInfo] = useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
      });
      const [snakeState, setSnakeState] = useState({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });
      const { signUp } = useAuth();
      const router = useRouter();
      const { vertical, horizontal, open, mss } = snakeState;

      const handleClose = () => {
            setSnakeState({ ...snakeState, open: false });
      };
      const passExp = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.{6,})");
      const handleChange = ({ target: { name, value } }) => {
            setUserInfo({ ...userInfo, [name]: value });
            setSnakeState({ ...snakeState, open: false })
      }
      const checkTest = () => {
            const checkPass = passExp.test(userInfo.password);
            console.log(checkPass);
      }
      const handleSubmit = async (e) => {
            e.preventDefault();
            const checkPass = passExp.test(userInfo.password);
            if (!checkPass) {
                  setSnakeState({ ...snakeState, open: true, mss: "Password must be at least 6 characters including uppercase lowercase and number" })
                  return
            }
            if (userInfo.password !== userInfo.confirmPassword) {
                  setSnakeState({ ...snakeState, open: true, mss: "Passwords don't match. Please try again." })
                  return
            }
            try {
                  await signUp(userInfo.email, userInfo.password, userInfo.name);
            } catch (err) {
                  setSnakeState({ ...snakeState, open: true, mss: err.message })
            }
            console.log(userInfo)
            setUserInfo({
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
            })
      }
      return (
            <div className='w-full min-h-screen grid place-items-center px-4 py-6'>
                  {/* <button onClick={checkTest}>check</button> */}
                  <div className='bg-gray-50 shadow-md rounded-md px-4 py-6 w-[320px] sm:w-[520px]'>
                        <div className='w-fit mx-auto flex items-end gap-4 mb-1'>
                              <Link href={'/'}>
                                    <Image width={30} src={Logo} alt="logo" />
                              </Link>
                              <h1 className='text-lg text-[#0A5174] font-semibold'>Sign up</h1>
                        </div>
                        <p className='text-center italic text-sm font-medium text-gray-500'>Create a new account</p>
                        <div className='w-full h-[1px] bg-[#0A5174] mt-3 mb-6'></div>
                        <Snackbar
                              anchorOrigin={{ vertical, horizontal }}
                              open={open}
                              onClose={handleClose}
                              message={mss}
                              key={vertical + horizontal}
                        />
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                              <Input
                                    type='text'
                                    name="name"
                                    title="Full Name"
                                    lbl={"Enter full name"}
                                    onChange={handleChange}
                                    value={userInfo.name}
                              />
                              <Input
                                    type='email'
                                    name="email"
                                    title="Email"
                                    lbl={"Enter your email"}
                                    onChange={handleChange}
                                    value={userInfo.email}
                              />
                              <Input
                                    type='password'
                                    name="password"
                                    title="Password"
                                    lbl={"Enter your password"}
                                    onChange={handleChange}
                                    value={userInfo.password}
                              />
                              <Input
                                    type='password'
                                    name="confirmPassword"
                                    title="Confirm Password"
                                    lbl={"Enter your password"}
                                    onChange={handleChange}
                                    value={userInfo.confirmPassword}
                              />
                              <label htmlFor="policy" className='cursor-pointer select-none'>
                                    <input type="checkbox" name="" id="policy" required />
                                    <span className='text-gray-500 italic'> I agree to the Terms & Conditions</span>
                              </label>
                              <button type="submit" className='btn_primary w-full'>Submit</button>
                              <p className='text-center'>All ready have an account.{" "}
                                    <Link href={'/login'}>
                                          <span className='text-[#0A5174] underline'>Login</span>
                                    </Link>
                              </p>
                              <div className="flex gap-2 items-center justify-center">
                                    <div className='w-[100px] h-[1px] bg-gray-400'></div>
                                    <p className='text-gray-500 font-semibold italic'>or</p>
                                    <div className='w-[100px] h-[1px] bg-gray-400'></div>
                              </div>
                              <div className='flex gap-4 items-center bg-gray-200 border border-gray-400 rounded-md px-3 py-2 w-[300px] mx-auto cursor-pointer hover:bg-gray-300 justify-center'>
                                    <Image width={25} src={GoogleLogo} alt="google" />
                                    <p>Login with Google</p>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Signup;