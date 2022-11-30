import React from 'react';
import Img1 from '../../../public/resources/images/we-do-1.jpg';
import Img2 from '../../../public/resources/images/we-do-2.jpg';
import Img3 from '../../../public/resources/images/we-do-3.jpg';
import AboutFirstSecChild from './AboutFirstSecChild';

const AboutFirstSec = () => {
      return (
            <div className='gap'>
                  <div className="container mx-auto px-2 sm:px-4">
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                              <div className='p-2'>
                                    <h1 className='uppercase text-xl font-medium text-gray-700 mb-3'>WE ARE READY WE MAKE EXCELLENT
                                          WORLD AND SAVE THE CHILDREN.</h1>
                                    <p className='text-base text-gray-400 font-light mb-4'>It’s a project of the National Committee Released Prisoners and Their Families’ care "Tarahum", It’s based on collecting used clothes, utensils, papers and devices and recycling them in the purpose of providing what can still be used by Tarahum’s beneficiaries, and that’s for achieving social and environmental investment.</p>
                                    <button className='btn_primary'>donate</button>
                              </div>
                              <AboutFirstSecChild
                                    image={Img3}
                                    title="In the Spotlight"
                                    des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsa ullam dicta suscipit ipsum porro molestias cum nihil quasi culpa."
                              />
                              <AboutFirstSecChild
                                    image={Img2}
                                    title="In the Spotlight"
                                    des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsa ullam dicta suscipit ipsum porro molestias cum nihil quasi culpa."
                              />
                              <AboutFirstSecChild
                                    image={Img1}
                                    title="In the Spotlight"
                                    des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsa ullam dicta suscipit ipsum porro molestias cum nihil quasi culpa."
                              />
                        </div>
                  </div>
            </div>
      );
};

export default AboutFirstSec;