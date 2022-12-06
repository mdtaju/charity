import React from 'react';
import { BiRocket } from 'react-icons/bi';
import { TbLeaf } from 'react-icons/tb';
import HeroIntroChild from './HeroIntroChild';

const HeroIntro = () => {
      return (
            <div className='gap bg-gray-100'>
                  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 md:px-8">
                        <HeroIntroChild title="our mission" pointDes={[" Achieving financial sustainability for the National Committee which is formed for the Care of Prisoners, Released Persons and Their Families.", "Bringing about a renaissance with the National Committee for the Care of Prisoners, Released Persons and Their Families in the field of environmental recycling and converting waste into financial profit.", "Training, rehabilitating and employing the beneficiaries of the National Committee for the Care of Prisoners and Released prisoners and their families.", "Providing additional services to the families of prisoners and those who are released that raises the standard of living and humanity"]} description="" Icon={BiRocket} />
                        <HeroIntroChild title="our vision" pointDes={[]} description="The project is aimed to be a pioneer in social investment by uniting the community with the prisoners’ families and the released prisoners, by receiving clothes, utensils, papers, and devices, and recycling them and investing them for the benefit of the beneficiaries of the National Committee which is formed to take care of prisoners, released prisoners and their families, by training and empowering them and creating investment opportunities for them, and that’s achieved by making community partnerships that enhances the value of the project and provides services that contributes to preserving the environment." Icon={TbLeaf} />
                  </div>
            </div>
      );
};

export default HeroIntro;