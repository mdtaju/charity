import { useTranslation } from 'next-i18next';
import React from 'react';
import { HiMail } from 'react-icons/hi';

const FooterBlgTwo = () => {
      const { t } = useTranslation('common');
      return (
            <div className='p-2 md:pr-2 md:p-0  text-gray-400 text-sm'>
                  <p className='font-thin text-sm'>{t("footerDes")}</p>
                  <div className='flex flex-col gap-2 mt-6'>
                        <div className='flex items-center gap-3'>
                              <HiMail className='text-gray-200' />
                              <p>admin@rhma.sa</p>
                        </div>
                  </div>
            </div>
      );
};

export default FooterBlgTwo;