import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import Input from '../Input';
import OptionInput from '../OptionInput';
import DonateAddForm from './DonateAddForm';

const DonateForm = () => {
      const [pdCondition, setPdCondition] = useState('');
      const Theme = createTheme({
            palette: {
                  primary: {
                        main: '#0A5174',
                  },
            },
      });
      return (
            <div className='gap'>
                  <div className="container mx-auto p-3 sm:px-4 md:px-8">
                        <div className='border border-[#0A5174] w-full md:w-[740px] mx-auto p-4 rounded-sm'>
                              <div className='text-center flex flex-col gap-2'>
                                    <h1 className='text-2xl font-semibold text-[#0A5175] -mb-2'>To be a Donor</h1>
                                    <p className='text-gray-500 italic'>Please fill the form below</p>
                                    <div className='w-1/2 h-[1px] bg-[#0A5174] mx-auto'></div>
                              </div>
                              <form action="">
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                                          <Input title='Full Name' type='text' lbl="Enter your name" />
                                          <Input title='Email' type='email' lbl='Enter your email' required />
                                          <Input title='Phone' type='tel' lbl='Enter your number' required />
                                          <Input title='Product type' type='text' lbl='Ex: T-shirt' required />
                                          <Input title='Product name' type='text' lbl='Enter product name' required />
                                          <OptionInput
                                                title='Product condition'
                                                lbl='Chose condition'
                                                state={pdCondition}
                                                setState={setPdCondition}
                                                options={['New & unused', 'New & used', 'Old but unused', 'Old & used']}
                                          />
                                    </div>
                                    <p className='font-semibold text-[#0A5174] mt-5'>Product image
                                          {/* <span className='text-red-500 font-bold text-lg'>{"*"}</span> */}
                                    </p>
                                    <Button
                                          className='mt-2'
                                          variant="contained"
                                          component="label"
                                    >
                                          Upload File
                                          <input
                                                type="file"
                                                hidden
                                          />
                                    </Button>
                                    {/* <div
                                          className='w-full p-4 mt-2 bg-[#e7e7e7] border-b border-[#0A5174] rounded-t-[3px]'
                                    >
                                          Upload File
                                          <input
                                                className='w-full h-full invisible'
                                                type="file"
                                          // hidden
                                          />
                                    </div> */}
                                    <h1 className='text-center text-[#0A5174] font-semibold text-lg mt-8'>Select your address carefully</h1>
                                    <p className='text-center italic text-gray-500'>Recommended is manually</p>
                                    <div className='w-full h-[1px] bg-[#0A5174] mt-2 mb-4'></div>

                                    {/* Donate Address form below */}
                                    <DonateAddForm />
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default DonateForm;