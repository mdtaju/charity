import React from 'react';
import WeDoOne from '../../public/resources/images/we-do-1.jpg';
import WeDoTwo from '../../public/resources/images/we-do-2.jpg';
import WeDoThree from '../../public/resources/images/we-do-3.jpg';
import WeDoChild from './WeDoChild';

const WeDo = () => {
      return (
            <div className='gap'>
                  <div className="container mx-auto px-2 sm:p-4">
                        <div className="block sm:flex items-center justify-between">
                              <div>
                                    <h1 className='text-lg font-medium'>What we can do?</h1>
                                    <h3 className='text-4xl font-semibold text-[#0A5174] uppercase mt-2'>latest causes</h3>
                              </div>
                              <p className='text-gray-500 italic mt-2 sm:mt-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam.</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-fit mx-auto mt-8'>
                              <WeDoChild
                                    image={WeDoOne}
                                    title='Our Upcoming work'
                                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam.'
                                    raised='300'
                                    goal='1500'
                              />
                              <WeDoChild
                                    image={WeDoTwo}
                                    title='Our Upcoming work'
                                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam.'
                                    raised='300'
                                    goal='1500'
                              />
                              <WeDoChild
                                    image={WeDoThree}
                                    title='Our Upcoming work'
                                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam.'
                                    raised='300'
                                    goal='1500'
                              />
                              <WeDoChild
                                    image={WeDoOne}
                                    title='Our Upcoming work'
                                    description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam.'
                                    raised='300'
                                    goal='1500'
                              />
                        </div>
                  </div>
            </div>
      );
};

export default WeDo;