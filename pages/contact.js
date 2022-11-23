import React from 'react';
import Contact from '../src/components/Contact/Contact';
import DonateBanner from '../src/components/Donate/DonateBanner';
import Layout from '../src/components/Layout';

const contact = () => {
      return (
            <>
                  <Layout>
                        <DonateBanner />
                        <Contact />
                  </Layout>
            </>
      );
};

export default contact;