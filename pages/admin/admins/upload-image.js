import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import FileDelete from '../../../src/components/Admin/FileDelete';
import FileUpload from '../../../src/components/Admin/FileUpload';
import { UseRole } from '../../../src/hoke/useRole';

const UploadImage = () => {
      const { t } = useTranslation("upload_image");
      const [images, setImages] = useState([]);
      const router = useRouter()
      const URole = UseRole();
      useEffect(() => {
            const getHistory = async () => {
                  const response = await axios.get(`https://rhma.sa/api/gallery`, {
                        headers: {
                              'Accept-Encoding': 'application/json',
                        }
                  });
                  const revData = await response.data.reverse();
                  setImages(revData);

                  const { token } = parseCookies();
                  if (token) {
                        if (URole !== "Super-Admin") {
                              console.log(URole)
                              router.push('/admin/dashboard')
                        }
                  } else {
                        router.push('/admin');
                  }
            }
            getHistory()
      }, [])
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("uploadImgTitle")}</h1>
                              <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                              <FileUpload />
                              <FileDelete images={images} />
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
      //       res.writeHead(302, { Location: "/admin" });
      //       res.end();
      // }
      // if (URole !== "Super-Admin") {
      //       res.writeHead(302, { Location: "/admin/dashboard" });
      //       res.end();
      // }
      // const response = await axios.get(`https://rhma.sa/api/gallery`, {
      //       headers: {
      //             'Accept-Encoding': 'application/json',
      //       }
      // });
      // const revData = response.data.reverse();
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'upload_image',
                  ]))
            }
      }
}

export default UploadImage;