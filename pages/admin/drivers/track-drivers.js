import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect } from 'react';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import { UseRole } from '../../../src/hoke/useRole';

const TrackDriver = () => {
      const router = useRouter()
      const URole = UseRole();
      useEffect(() => {
            const getHistory = () => {
                  const { token } = parseCookies();
                  if (token) {
                        if (URole === "Warehouse-Admin") {
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
                  <div className='gap'>
                        <div className="container mx-auto p-4">

                        </div>
                  </div>
            </AdminLayout>
      );
};

export async function getStaticProps(context) {
      // const { token, role } = parseCookies(context);
      // const URole = await getRole(role);
      // const { res } = context;
      // if (!token) {
      //       const { res } = context;
      //       res.writeHead(302, { Location: "/admin" });
      //       res.end();
      // }
      // if (URole === "Warehouse-Admin") {
      //       res.writeHead(302, { Location: "/admin/dashboard" });
      //       res.end();
      // }
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'track',
                  ])),
            }
      }
}

export default TrackDriver;