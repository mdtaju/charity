import React from 'react';

const HeroLayout = ({ title, children }) => {
      return (
            <div className='shadow-lg rounded-md h-full'>
                  <div className="px-4 sm:px-8 py-4">
                        <h1 className='text-2xl font-semibold text-[#0A5174]'>{title}</h1>
                  </div>
                  <div className="w-full h-[1px] bg-[#0A5174]"></div>
                  <div className="px-4 sm:px-8 py-4">
                        {children}
                  </div>
            </div>
      );
};

export default HeroLayout;