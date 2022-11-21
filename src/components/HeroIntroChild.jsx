import React from 'react';

const HeroIntroChild = ({ title, description, Icon }) => {
      return (
            <div className='p-8 bg-gray-200 text-center rounded-md group/heInt'>
                  <div className="w-fit mx-auto p-6 border-2 border-[#0A5174] rounded-full group-hover/heInt:bg-[#0A5174] duration-200">
                        <Icon className='text-6xl group-hover/heInt:text-white duration-200' />
                  </div>
                  <div className="mt-4">
                        <h1 className='uppercase text-[#0A5174] font-bold text-xl'>{title}</h1>
                        <p className='font-medium mt-2 text-gray-500'>{description}</p>
                  </div>
            </div>
      );
};

export default HeroIntroChild;