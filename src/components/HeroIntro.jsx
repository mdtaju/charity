import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { BiRocket } from 'react-icons/bi';
import { TbLeaf } from 'react-icons/tb';
import HeroIntroChild from './HeroIntroChild';

const HeroIntro = () => {
      const { t } = useTranslation('home');
      const router = useRouter();
      const pointsArr = [t("heroIntroSecOnePointOne"), t("heroIntroSecOnePointTwo"), t("heroIntroSecOnePointThree"), t("heroIntroSecOnePointFour")]
      return (
            <div className='gap bg-gray-100'>
                  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 md:px-8">
                        <div className='p-3 md:p-8 bg-gray-200 text-center rounded-md group/heInt'>
                              <div className="w-fit mx-auto p-6 border-2 border-[#0A5174] rounded-full group-hover/heInt:bg-[#0A5174] duration-200">
                                    <BiRocket className='text-6xl group-hover/heInt:text-white duration-200' />
                              </div>
                              <div className="mt-4">
                                    <h1 className='uppercase text-[#0A5174] font-bold text-xl'>{t("heroIntroSecOneTitle")}</h1>
                                    {
                                          pointsArr &&
                                          pointsArr.map((item, i) => (
                                                <div key={i}>
                                                      <p style={router.locale === "en" ? { textAlign: 'justify' } : { textAlign: 'right' }} className='font-medium mt-2 text-gray-500 text-justify'>{item}</p>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
                        <HeroIntroChild title={t("heroIntroSecTwoTitle")} pointDes={[]} description={t("heroIntroSecTwoDescription")} Icon={TbLeaf} />
                  </div>
            </div>
      );
};

export default HeroIntro;