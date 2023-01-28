import { useTranslation } from 'next-i18next';
import React from 'react';

const TrackDonationInfo = ({ id, date, pName, pCondition, cBy, adminName, auth }) => {
      const { t } = useTranslation("track");
      return (
            <div className='mt-4'>
                  <p className='text-sm font-semibold text-gray-700'>{t("trackIdTitle")}: {id}</p>
                  <p className='text-sm font-semibold text-gray-700'>Date: {date}</p>
                  {
                        auth === "admin" &&
                        <>
                              <h1 className='text-sm text-[#0A5174] font-semibold mb-1 mt-6'>Created By: </h1>
                              <p className='text-xl text-gray-600 font-medium mb-4'>{cBy.toUpperCase()}</p>
                              {
                                    adminName &&
                                    <>
                                          <h1 className='text-sm text-[#0A5174] font-semibold mb-1 mt-6'>Admin Name: </h1>
                                          <p className='text-xl text-gray-600 font-medium mb-4'>{adminName}</p>
                                    </>
                              }
                        </>
                  }
                  <h1 className='text-sm text-[#0A5174] font-semibold mb-1 mt-6'>{t("trackPDName")}: </h1>
                  <p className='text-xl text-gray-600 font-medium mb-4'>{pName}</p>
                  <h1 className='text-sm text-[#0A5174] font-semibold mb-1 mt-6'>{t("trackPDCondition")}: </h1>
                  <p className='text-xl text-gray-600 font-medium mb-4'>{pCondition}</p>
            </div>
      );
};

export default TrackDonationInfo;