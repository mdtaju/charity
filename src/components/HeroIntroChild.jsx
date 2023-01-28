import React from 'react';

const HeroIntroChild = ({ title, pointDes, description, Icon }) => {
      return (
            <div className='p-3 md:p-8 bg-gray-200 text-center rounded-md group/heInt'>
                  <div className="w-fit mx-auto p-6 border-2 border-[#0A5174] rounded-full group-hover/heInt:bg-[#0A5174] duration-200">
                        <Icon className='text-6xl group-hover/heInt:text-white duration-200' />
                  </div>
                  <div className="mt-4">
                        <h1 className='uppercase text-[#0A5174] font-bold text-xl'>{title}</h1>
                        {
                              description ?
                                    <p className='font-medium mt-2 text-gray-500 text-justify'>{description}</p> :
                                    <ol className='pl-3 md:pl-0'>
                                          {
                                                pointDes.map((item, i) => (
                                                      <li className='font-medium mt-2 text-gray-500 list-decimal text-justify' key={i}>{item}</li>
                                                ))
                                          }
                                    </ol>
                        }
                  </div>
            </div>
      );
};

export default HeroIntroChild;