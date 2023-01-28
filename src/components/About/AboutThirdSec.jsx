import { useTranslation } from 'next-i18next';
import React from 'react';
import GalleryPtChild from '../Gallery/GalleryPtChild';

const AboutThirdSec = ({ glr }) => {
      const { t } = useTranslation("about");
      return (
            <div className='gap'>
                  <div className="container mx-auto">
                        <div className='p-2 md:px-4 w-full'>
                              <div className='mb-4'>
                                    <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>{t("gallery")}</h1>
                                    <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2">
                                    {
                                          glr.slice(0, 12).map((item, i) => (
                                                <GalleryPtChild
                                                      key={i}
                                                      image={`/resources/upload/${item.id}`}
                                                />
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AboutThirdSec;