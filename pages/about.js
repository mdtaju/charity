import React from 'react';
import AboutFirstSec from '../src/components/About/AboutFirstSec';
import AboutSndSec from '../src/components/About/AboutSndSec';
import AboutThirdSec from '../src/components/About/AboutThirdSec';
import DonateBanner from '../src/components/Donate/DonateBanner';
import Layout from '../src/components/Layout';

const about = () => {
      return (
            <>
                  <Layout>
                        <DonateBanner />
                        <AboutFirstSec />
                        <AboutSndSec />
                        <AboutThirdSec />
                  </Layout>
            </>
      );
};

export default about;