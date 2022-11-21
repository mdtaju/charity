import React from 'react';
import { BiRocket } from 'react-icons/bi';
import { RiHistoryLine } from 'react-icons/ri';
import { TbLeaf } from 'react-icons/tb';
import HeroIntroChild from './HeroIntroChild';

const HeroIntro = () => {
      return (
            <div className='gap bg-gray-100'>
                  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 px-8">
                        <HeroIntroChild title="our history" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, provident accusantium. Voluptatem ut perspiciatis a quas nisi reiciendis similique distinctio!" Icon={RiHistoryLine} />
                        <HeroIntroChild title="our mission" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, provident accusantium. Voluptatem ut perspiciatis a quas nisi reiciendis similique distinctio!" Icon={BiRocket} />
                        <HeroIntroChild title="our vision" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, provident accusantium. Voluptatem ut perspiciatis a quas nisi reiciendis similique distinctio!" Icon={TbLeaf} />
                  </div>
            </div>
      );
};

export default HeroIntro;