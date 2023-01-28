import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect } from 'react';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import DonateForm from '../../../src/components/Donate/DonateForm';
import { UseRole } from '../../../src/hoke/useRole';

const MakeDonations = () => {
      const { t } = useTranslation("donate");
      const { name } = parseCookies();
      const router = useRouter()
      const URole = UseRole();
      useEffect(() => {
            console.log("called")
            const getHistory = () => {
                  const { token } = parseCookies();
                  if (token) {
                        if ((URole !== "Super-Admin") && (URole !== "Admin") && (URole !== "Customer-Service")) {
                              console.log(URole)
                              router.push('/admin/dashboard')
                        }
                  } else {
                        router.push('/admin');
                  }
            }
            getHistory()
      })
      return (
            <AdminLayout>
                  <DonateForm
                        title={t("donateFormAdminTitle")}
                        CBy={name}
                        adminName={"Md_Riyadh"}
                  />
            </AdminLayout>
      );
};

export async function getStaticProps(context) {
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'donate',
                  ])),
            }
      }
}
export default MakeDonations;