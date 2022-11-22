import React from 'react';
import About from '../src/components/About/About';
import DonateBanner from '../src/components/Donate/DonateBanner';
import Layout from '../src/components/Layout';

const about = () => {
      return (
            <>
                  <Layout>
                        <DonateBanner />
                        <About />
                  </Layout>
            </>
      );
};

export default about;