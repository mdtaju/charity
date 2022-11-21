import React from 'react';

const Input = ({ title, ...rest }) => {
      return (
            <div className='flex flex-col gap-2'>
                  <p className='font-semibold'>{title} <span className='text-red-500 font-bold text-lg'>{"*"}</span></p>
                  <input {...rest} className='border border-black px-3 py-2 rounded-sm bg-gray-100 outline-none' />
            </div>
      );
};

export default Input;