import React from 'react';
import styles from '../../../styles/About.module.scss';

const AboutSndSec = () => {
      return (
            <div className={styles.about_second_sec_container}>
                  <div className='gap'>
                        <div className="container mx-auto p-2 sm:px-4">
                              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                    <div className='flex flex-col gap-4'>
                                          <h1 className='text-base text-gray-800 font-light'>Occupation Model.</h1>
                                          <p className='text-sm font-light text-gray-500 leading-6 tracking-wider text-justify'>The project works in the circular sector through charitable logistical support by using a full fleet of cars that collect new and used in-kind donations (clothes - utensils - papers - equipment), prepare them, classify them, recycle them, and disburse new ones to the prisoners' families.



                                                The project owns a fleet of cars in the initial stage, consisting of 17 cars + forklifts + (45) workers, (4) warehouses.</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                          <h1 className='text-base text-gray-800 font-light'>Social and Environmental Impact.</h1>
                                          <p className='text-sm font-light text-gray-500 leading-6 tracking-wider text-justify'>The Solidarity of society is shown in providing the prisoners’ families the used items to get benefit from them, and share goodness with others. The diversity of in-kind items and the love of providing household necessities to the prisoners’ families by members of the community. Providing a safe environment for the prisoners’ families by providing all family members with personal needs. Preserving the environment from the waste of the thrown away items and converting them into a usable product.</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutSndSec;