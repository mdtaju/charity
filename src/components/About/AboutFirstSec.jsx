import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

const AboutFirstSec = () => {
      const { t } = useTranslation("about");
      return (
            <div className='gap'>
                  <div className="container mx-auto px-2 sm:px-4">
                        <div className='p-2'>
                              <p className='text-base text-gray-700 font-light mb-4'>{t("heroIntroTitle")}</p>
                              <Link href={'/donate'}>

                                    <button className='btn_primary'>{t("donate")}</button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default AboutFirstSec;