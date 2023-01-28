import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Contact from '../src/components/Contact/Contact';
import DonateBanner from '../src/components/Donate/DonateBanner';
import Layout from '../src/components/Layout';

const ContactPage = () => {
      return (
            <>
                  <Layout>
                        <DonateBanner />
                        <Contact />
                  </Layout>
            </>
      );
};
export async function getStaticProps({ locale }) {
      return {
            props: {
                  ...(await serverSideTranslations(locale, [
                        'common',
                        'contact',
                  ])),
            }
      }
}
export default ContactPage;