import { Snackbar } from '@mui/material';
import axios from 'axios';
import moment from 'moment/moment';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import Input from '../../../src/components/Input.jsx';
import { UseRole } from '../../../src/hoke/useRole';

const MakeDriver = () => {
      const { t } = useTranslation("make_driver");
      const router = useRouter()
      const URole = UseRole();
      const [driverInfo, setDriverInfo] = useState({
            name: "",
            phone: "",
            password: "",
            location: ""
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
            setDriverInfo({ ...driverInfo, [name]: value })
      }

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
      const handleSubmit = async (e) => {
            e.preventDefault();
            const creationDate = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            const allData = {
                  ...driverInfo,
                  date: creationDate
            }
            try {
                  await axios.post("/api/drivers", allData);
                  setSnakeState({ ...snakeState, open: true, mss: t("makeDriverInputScssMss") })
                  setDriverInfo({
                        name: "",
                        phone: "",
                        password: "",
                        location: ""
                  })
            } catch (error) {
                  setSnakeState({ ...snakeState, open: true, mss: t("makeDriverInputErrMss") })
            }
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6 max-w-[750px] mx-auto">
                              <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("makeDriverTitle")}</h1>
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
                                                      title={t("makeDriverInputOneTitle")}
                                                      lbl={t("makeDriverInputOneLbl")}
                                                      type="text"
                                                      name="name"
                                                      onChange={handleChange}
                                                      value={driverInfo.name}
                                                />
                                                <Input
                                                      title={t("makeDriverInputTwoTitle")}
                                                      lbl={t("makeDriverInputTwoLbl")}
                                                      type="number"
                                                      name="phone"
                                                      onChange={handleChange}
                                                      value={driverInfo.phone}
                                                />
                                                <Input
                                                      title={t("makeDriverInputThreeTitle")}
                                                      lbl={t("makeDriverInputThreeLbl")}
                                                      type="password"
                                                      name="password"
                                                      onChange={handleChange}
                                                      value={driverInfo.password}
                                                />

                                                <Input
                                                      title={t("makeDriverInputFourTitle")}
                                                      lbl={t("makeDriverInputFourLbl")}
                                                      type="text"
                                                      name="location"
                                                      onChange={handleChange}
                                                      value={driverInfo.location}
                                                />
                                          </div>
                                          <button className='btn_primary w-full'>{t("makeDriverInputBtn")}</button>
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
                        'make_driver',
                  ]))
            }
      }
}
export default MakeDriver;