import axios from 'axios';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import AboutFirstSec from '../src/components/About/AboutFirstSec';
import AboutSndSec from '../src/components/About/AboutSndSec';
import AboutThirdSec from '../src/components/About/AboutThirdSec';
import DonateBanner from '../src/components/Donate/DonateBanner';
import HomeVideo from '../src/components/HomeVideo';
import Layout from '../src/components/Layout';

const About = ({ gallery }) => {
      return (
            <>
                  <Layout>
                        <DonateBanner />
                        <AboutFirstSec />
                        <AboutSndSec />
                        <HomeVideo />
                        <AboutThirdSec glr={gallery} />
                  </Layout>
            </>
      );
};
export async function getServerSideProps({ locale }) {

      const response = await axios.get(`https://rhma.sa/api/gallery`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const revData = response.data.reverse();
      return {
            props: {
                  ...(await serverSideTranslations(locale, [
                        'common',
                        'about',
                  ])),
                  gallery: revData
            }
      }
}
export default About;