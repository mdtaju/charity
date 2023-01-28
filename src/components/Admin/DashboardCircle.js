import React from 'react';

const DashboardCircle = ({ bg, amount, title }) => {
      return (
            <div className='flex flex-col gap-4 items-center w-fit'>
                  <div style={{ backgroundColor: bg }} className='w-[150px] h-[150px] rounded-full grid place-items-center p-6'>
                        <p className='text-white text-center text-2xl font-bold'>{amount}</p>
                  </div>
                  <h1 className='text-center text-lg font-bold'>{title}</h1>
            </div>
      );
};

export default DashboardCircle;