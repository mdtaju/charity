import React from 'react';
import styles from '../../../styles/Donate.module.scss';

const DonateBanner = () => {
      return (
            <div className={`${styles.donate_container} mt-[60px] grid place-items-center`}>
                  <div className='bg-white p-2'>
                        <h1 className='text-xl font-semibold text-center'>Help the poor people</h1>
                  </div>
            </div>
      );
};

export default DonateBanner;