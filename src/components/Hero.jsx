import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Hero.module.scss';

const Hero = () => {
      const { t } = useTranslation('home');
      return (
            <div className={`${styles.hero_container} mt-[60px]`}>
                  <div className="container mx-auto px-4 py-32">
                        <div className='mx-auto sm:w-[600px] text-center'>
                              <h1 className='text-6xl font-bold text-white'>{t("heroTitle")}</h1>
                              <h1 className='bg-white p-2 text-2xl w-fit mx-auto font-bold my-6 uppercase'>{t("heroSubTitle")}</h1>
                              <p className='text-base text-gray-300 mt-2'>{t("heroDescription")}</p>
                              <Link href={'/donate'}><button className='btn_primary px-6 py-3 mt-6'>{t("heroDonate")}</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Hero;