import React from 'react';

const CounterChild = ({ Icon, num, title }) => {
      return (
            <div className='p-2 sm:p-3'>
                  <div className='w-fit mx-auto flex items-start justify-between gap-3'>
                        <Icon className='text-5xl text-gray-600' />
                        <div className='flex flex-col gap-4' style={{ marginTop: '-5px', fontFamily: "'Montserrat', sans-serif" }}>
                              <h1 className='text-6xl text-[#0A5174]'>{num}</h1>
                              <div className='w-full h-[1px] bg-[#0A5174]'></div>
                              <p className='text-gray-500'>{title}</p>
                        </div>
                  </div>
            </div>
      );
};

export default CounterChild;