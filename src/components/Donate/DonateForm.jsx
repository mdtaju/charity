import React from 'react';

const DonateForm = () => {
      return (
            <div className='gap'>
                  <div className="container mx-auto p-3 sm:px-4 md:px-8">
                        <div className='border border-[#0A5174] w-full md:w-[740px] mx-auto p-4'>
                              <div className='text-center flex flex-col gap-2'>
                                    <h1 className='text-2xl font-semibold text-[#0A5175] -mb-2'>To be a Donor</h1>
                                    <p className='text-gray-500 italic'>Please fill the form below</p>
                                    <div className='w-1/2 h-[1px] bg-[#0A5174] mx-auto'></div>
                              </div>
                              <form action="">
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                          <label htmlFor="">
                                                <input type="text" placeholder='Enter you name' />
                                          </label>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default DonateForm;