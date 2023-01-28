import { useTranslation } from 'next-i18next';
import React from 'react';

const FooterBlgThree = () => {
      const { t } = useTranslation('common');
      return (
            <div className='p-2 md:pr-2 md:p-0'>
                  <div>
                        <h1 className='text-gray-200 text-base font-thin mb-3'>{t("footerCallTitle")}</h1>
                        <p className='text-gray-500 text-sm font-thin mb-1'>{t("footerCallNameOne")}:  0580055000</p>
                        <p className='text-gray-500 text-sm font-thin'>{t("footerCallNameTwo")} 0561699222</p>
                  </div>
            </div>
      );
};

export default FooterBlgThree;