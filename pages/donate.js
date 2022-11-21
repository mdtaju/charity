import React from 'react';
import DonateBanner from '../src/components/Donate/DonateBanner';
import DonateForm from '../src/components/Donate/DonateForm';
import Layout from '../src/components/Layout';

const donate = () => {
      return (
            <>
                  <Layout>
                        <DonateBanner />
                        <DonateForm />
                  </Layout>
            </>
      );
};

export default donate;