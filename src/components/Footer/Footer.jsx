import React from 'react';
import FooterBlgBtm from './FooterBlgBtm';
import FooterBlgFour from './FooterBlgFour';
import FooterBlgMdl from './FooterBlgMdl';
import FooterBlgOne from './FooterBlgOne';
import FooterBlgThree from './FooterBlgThree';
import FooterBlgTwo from './FooterBlgTwo';


const Footer = () => {
      return (
            <footer className='bg-[#222222]'>
                  <div className="container mx-auto px-2 py-6 sm:p-4 md:py-12 md:px-6">
                        <div>
                              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                                    <FooterBlgOne />
                                    <FooterBlgTwo />
                                    <FooterBlgThree />
                                    <FooterBlgFour />
                              </div>
                              <div className='grid grid-cols-1 sm:gird-cols-2 md:grid-cols-4 gap-4 mt-8'>
                                    <FooterBlgMdl />
                              </div>
                              <div></div>
                        </div>
                  </div>
                  <FooterBlgBtm />
            </footer>
      );
};

export default Footer;