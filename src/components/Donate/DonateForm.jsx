import React from 'react';
import Input from '../Input';

const DonateForm = () => {
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
                                          <Input title='Full Name' type='text' placeholder='Enter your name' required />
                                          <Input title='Email' type='email' placeholder='Enter your email' required />
                                          <Input title='Phone' type='tel' placeholder='Enter your number' required />
                                          {/* <Input title='Product type' type='text' placeholder='Ex: T-shirt' required /> */}
                                          <Input title='Product name' type='text' placeholder='Enter product name' required />
                                          <div className='flex flex-col gap-2'>
                                                <p className='font-semibold'>Product type <span className='text-red-500 font-bold text-lg'>{"*"}</span></p>
                                                <select name="Select a type" id="" className='border border-black px-3 py-2 rounded-sm bg-gray-100 outline-none'>
                                                      <option value="">New & unused</option>
                                                      <option value="">New & used</option>
                                                      <option value="">Old but unused</option>
                                                      <option value="">Old & used</option>
                                                </select>
                                          </div>

                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default DonateForm;