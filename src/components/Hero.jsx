import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Hero.module.scss';

const Hero = () => {

      return (
            <div className={`${styles.hero_container} mt-[60px]`}>
                  <div className="container mx-auto px-4 py-32">
                        <div className='mx-auto sm:w-[600px] text-center'>
                              <h1 className='text-6xl font-bold text-white'>Welcome</h1>
                              <h1 className='bg-white p-2 text-2xl w-fit mx-auto font-bold my-6 uppercase'>Help the poor people</h1>
                              <p className='text-base text-gray-300 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, rerum quae illo maiores, cumque, doloribus harum quidem dolores magnam ad quod. Inventore voluptas id autem!</p>
                              <Link href={'/donate'}><button className='btn_primary px-6 py-3 mt-6'>Donate</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Hero;