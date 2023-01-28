import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import DonateBanner from '../src/components/Donate/DonateBanner';
import DonateForm from '../src/components/Donate/DonateForm';
import Layout from '../src/components/Layout';

const Donate = () => {
      const { t } = useTranslation("donate");
      return (
            <>
                  <Layout>
                        <DonateBanner />
                        <DonateForm
                              title={t("donateFormTitle")}
                              CBy={"Web API"}
                              adminName=""
                        />
                  </Layout>
            </>
      );
};
export async function getStaticProps({ locale }) {
      return {
            props: {
                  ...(await serverSideTranslations(locale, [
                        'common',
                        'donate',
                  ])),
            }
      }
}
export default Donate;