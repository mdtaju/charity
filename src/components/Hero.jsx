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
                              <p className='text-base text-gray-300 mt-2'>It’s a project of the National Committee Released Prisoners and Their Families’ care "Tarahum", It’s based on collecting used clothes, utensils, papers and devices and recycling them in the purpose of providing what can still be used by Tarahum’s beneficiaries, and that’s for achieving social and environmental investment.</p>
                              <Link href={'/donate'}><button className='btn_primary px-6 py-3 mt-6'>Donate</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Hero;