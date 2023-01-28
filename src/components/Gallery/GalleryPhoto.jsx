import { useTranslation } from 'next-i18next';
import React from 'react';
import GalleryPtChild from './GalleryPtChild';
const GalleryPhoto = ({ gallery }) => {


      const { t } = useTranslation('home');
      return (
            <div className='p-2 md:pr-2 md:p-0 w-full'>
                  <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>{t("galleryTitle")}</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        {
                              gallery.slice(0, 8).map((item, i) => (
                                    <GalleryPtChild
                                          key={i}
                                          image={`/resources/upload/${item.id}`}
                                    />
                              ))
                        }
                  </div>
            </div>
      );
};

export default GalleryPhoto;