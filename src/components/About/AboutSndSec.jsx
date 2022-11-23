import React from 'react';
import styles from '../../../styles/About.module.scss';

const AboutSndSec = () => {
      return (
            <div className={styles.about_second_sec_container}>
                  <div className='gap'>
                        <div className="container mx-auto p-2 sm:px-4">
                              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                    <div className='flex flex-col gap-4'>
                                          <h1 className='text-base text-gray-800 font-light'>Who we are ?</h1>
                                          <p className='text-sm font-light text-gray-500 leading-6 tracking-wider text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum earum enim eveniet expedita, ipsum repellat provident quos quae fugit sapiente. Necessitatibus repudiandae sint laborum officiis aliquid praesentium dolorum aut. Quasi aspernatur perspiciatis architecto dolorem iure quaerat perferendis quisquam officiis vel quas, magnam optio placeat molestiae, ratione laboriosam reiciendis error fuga atque modi consequatur dolore quae, sequi minus animi? Dignissimos doloribus praesentium distinctio aliquid mollitia ut fugit laborum ex nemo rem, sunt corporis magnam quam magni possimus totam iste? Quos totam illum, rem beatae sunt numquam similique eius nobis aut esse, suscipit harum ipsum, dolorem non ipsam quod excepturi perspiciatis.</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                          <h1 className='text-base text-gray-800 font-light'>What we do ?</h1>
                                          <p className='text-sm font-light text-gray-500 leading-6 tracking-wider text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum earum enim eveniet expedita, ipsum repellat provident quos quae fugit sapiente. Necessitatibus repudiandae sint laborum officiis aliquid praesentium dolorum aut. Quasi aspernatur perspiciatis architecto dolorem iure quaerat perferendis quisquam officiis vel quas, magnam optio placeat molestiae, ratione laboriosam reiciendis error fuga atque modi consequatur dolore quae, sequi minus animi? Dignissimos doloribus praesentium distinctio aliquid mollitia ut fugit laborum ex nemo rem, sunt corporis magnam quam magni possimus totam iste? Quos totam illum, rem beatae sunt numquam similique eius nobis aut esse, suscipit harum ipsum, dolorem non ipsam quod excepturi perspiciatis.</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutSndSec;