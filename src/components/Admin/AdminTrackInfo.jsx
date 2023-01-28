import { useTranslation } from 'next-i18next';
import React from 'react';
const AdminTrackInfo = ({ info }) => {
      const { t } = useTranslation("track");
      const { id, fullName, phone, city, district, address, productCondition, productDescription, ofp } = info;
      return (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>{t("trackInfoOne")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{id}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>{t("trackInfoTwo")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{fullName}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>{t("trackInfoThree")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{phone}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>{t("trackInfoFour")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{city}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>
                                    {t("trackInfoFive")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{district}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>
                                    {t("trackInfoSix")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{address}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>
                                    {t("trackInfoSeven")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{productCondition}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>
                                    {t("trackInfoEight")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{productDescription}</h1>
                        </div>
                  </div>
                  <div className='flex items-center gap-4 border border-[#0A5174] rounded-md'>
                        <div className='p-2 bg-[#0a5174] w-1/2 h-full flex items-center'>
                              <h1 className='text-xs font-bold text-white'>
                                    {t("trackInfoNine")}:</h1>
                        </div>
                        <div className='w-1/2'>
                              <h1 className='text-gray-600 text-xs break-words font-semibold '>{ofp}</h1>
                        </div>
                  </div>
            </div>
      );
};

export default AdminTrackInfo;