import { useTranslation } from 'next-i18next';
import React from 'react';
import styles from '../../../styles/About.module.scss';

const AboutSndSec = () => {
      const { t } = useTranslation("about");
      return (
            <div className={styles.about_second_sec_container}>
                  <div className='gap'>
                        <div className="container mx-auto p-2 sm:px-4">
                              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                    <div className='flex flex-col gap-4'>
                                          <h1 className='text-base text-gray-800 font-light'>{t("secTwoPartOneTitle")}</h1>
                                          <p className='text-sm font-light text-gray-500 leading-6 tracking-wider text-justify'>{t("secTwoPartOneDes")}</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                          <h1 className='text-base text-gray-800 font-light'>{t("secTwoPartTwoTitle")}</h1>
                                          <p className='text-sm font-light text-gray-500 leading-6 tracking-wider text-justify'>{t("secTwoPartTwoDes")}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutSndSec;