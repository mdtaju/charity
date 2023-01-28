import { Snackbar } from '@mui/material';
import axios from 'axios';
import moment from 'moment/moment';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import Input from '../../../src/components/Input';
import OptionInput from '../../../src/components/OptionInput';
import { UseRole } from '../../../src/hoke/useRole';

const MakeAdmin = () => {
      const { t } = useTranslation("make_admin");
      const [authorization, setAuthorization] = useState('');
      const router = useRouter()
      const URole = UseRole();
      useEffect(() => {
            const getHistory = () => {
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
      })
      const [adminInfo, setAdminInfo] = useState({
            name: "",
            phone: "",
            password: "",
      })
      const [snakeState, setSnakeState] = useState({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });
      const { vertical, horizontal, open, mss } = snakeState;
      const handleClose = () => {
            setSnakeState({ ...snakeState, open: false, mss: "" });
      };
      const handleChange = ({ target: { name, value } }) => {
            setAdminInfo({ ...adminInfo, [name]: value })
      }

      const handleSubmit = async (e) => {
            e.preventDefault();
            const convertAuth = authorization.toString();
            const today = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            const allData = {
                  ...adminInfo,
                  // access: convertAuth,
                  role: authorization,
                  date: today
            }
            try {
                  await axios.post("/api/admin/make-admin", allData);
                  setSnakeState({ ...snakeState, open: true, mss: t("makeAdDlgSccMss") });
                  setAdminInfo({
                        name: "",
                        phone: "",
                        password: "",
                  })
                  setAuthorization('');
            } catch (error) {
                  const err = await error.response.data.message;
                  setSnakeState({ ...snakeState, open: true, mss: t("makeAdDlgErrMss") })
            }
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("makeAdminTitle")}</h1>
                              <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                              <div className='p-4 border border-[#0A5174] rounded-md'>
                                    <Snackbar
                                          anchorOrigin={{ vertical, horizontal }}
                                          open={open}
                                          onClose={handleClose}
                                          message={mss}
                                          key={vertical + horizontal}
                                    />
                                    <form onSubmit={handleSubmit}>
                                          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                                                <Input
                                                      title={t("makeAdInOneTitle")}
                                                      lbl={t("makeAdInOneLbl")}
                                                      type="text"
                                                      name="name"
                                                      value={adminInfo.name}
                                                      onChange={handleChange}
                                                />
                                                <Input
                                                      title={t("makeAdInTwoTitle")}
                                                      lbl={t("makeAdInTwoLbl")}
                                                      type="number"
                                                      name="phone"
                                                      value={adminInfo.phone}
                                                      onChange={handleChange}
                                                />
                                                <Input
                                                      title={t("makeAdInThreeTitle")}
                                                      lbl={t("makeAdInThreeLbl")}
                                                      type="password"
                                                      name="password"
                                                      value={adminInfo.password}
                                                      onChange={handleChange}
                                                />
                                                <OptionInput
                                                      title={t("makeAdInFourTitle")}
                                                      lbl={t("makeAdInFourLbl")}
                                                      options={["Default", "Operation", "Customer-Service", "Admin", "Super-Admin"]}
                                                      state={authorization}
                                                      setState={setAuthorization}
                                                />
                                          </div>
                                          <button className='btn_primary w-full'>{t("makeAdInBtn")}</button>
                                    </form>
                              </div>
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
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'make_admin',
                  ]))
            }
      }
}

export default MakeAdmin;