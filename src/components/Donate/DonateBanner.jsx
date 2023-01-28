import { useTranslation } from 'next-i18next';
import React from 'react';
import styles from '../../../styles/Donate.module.scss';

const DonateBanner = () => {
      const { t } = useTranslation("common");
      return (
            <div className={`${styles.donate_container} mt-[60px] grid place-items-center`}>
                  {/* <div className='bg-white p-2'>
                        <h1 className='text-xl font-semibold text-center uppercase'>{t("heroTitle")}</h1>
                  </div> */}
            </div>
      );
};

export default DonateBanner;