import { Dialog } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import Input from '../../../src/components/Input';
import { UseRole } from '../../../src/hoke/useRole';
// import DonationsTable from '../../../src/components/Donate/DonationsTable';
const DonationsTable = dynamic(() => import('../../../src/components/Donate/DonationsTable'), { ssr: false });
const Drivers = () => {
      const { t } = useTranslation("all_drivers");
      const router = useRouter();
      const URole = UseRole();
      const [allDrivers, setAllDrivers] = useState([]);
      const [selectionModel, setSelectionModel] = useState([]);
      const [dialogOpen, setDialogOpen] = useState({
            open: false,
            openWith: "update"
      });
      const [deleteInfo, setDeleteInfo] = useState([]);
      const [driverInfo, setDriverInfo] = useState({
            name: "",
            phone: "",
            password: "",
            location: ""
      })
      const [snakeState, setSnakeState] = useState({
            open: false,
            mss: ""
      });
      const { open, mss } = snakeState;
      useEffect(() => {
            const reqDriver = async () => {
                  const response = await axios.get(`https://rhma.sa/api/drivers`, {
                        headers: {
                              'Accept-Encoding': 'application/json',
                        }
                  });
                  const rhDrivers = await response.data;
                  const getDriver = await rhDrivers.find((item) => item.phone === selectionModel[0]);
                  const getDrivers = await rhDrivers.filter((item) => {
                        return selectionModel.indexOf(item.phone) > -1
                  })
                  setDeleteInfo(getDrivers);
                  setDriverInfo(getDriver);
                  setAllDrivers(rhDrivers)

                  const { token } = parseCookies();
                  if (token) {
                        if (URole !== "Super-Admin" && URole !== "Admin") {
                              console.log(URole)
                              await router.push('/admin/dashboard')
                        }
                  } else {
                        await router.push('/admin');
                  }
            }
            reqDriver()
      }, [selectionModel]);
      const handleChange = ({ target: { name, value } }) => {
            setDriverInfo({ ...driverInfo, [name]: value })
      }
      const handleDelete = () => {
            selectionModel.map(async (item) => {
                  try {
                        const res = await axios.delete("/api/driver-modify", { data: { id: item } });
                        setSnakeState({ open: true, mss: t("allDriverDlgDelMss") });
                        router.replace(router.asPath)
                  } catch (error) {
                        setSnakeState({ open: true, mss: t("allDriverWrongMss") })
                  }
            })

      }
      const handleSubmit = async (e) => {
            e.preventDefault();
            const firstElement = selectionModel[0];
            const allData = {
                  ...driverInfo,
                  id: firstElement
            }
            try {
                  const res = await axios.post("/api/driver-modify", allData);
                  setSnakeState({ open: true, mss: t("allDriverDlgUpSccMss") });
                  setDriverInfo({
                        name: "",
                        phone: "",
                        password: "",
                        location: ""
                  })
                  setTimeout(() => { setDialogOpen(false); setSnakeState({ open: true, mss: "" }); })
                  router.replace(router.asPath)
            } catch (error) {
                  setSnakeState({ open: true, mss: t("allDriverWrongMss") })
            }
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("allDriversMainTitle")}</h1>
                              <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                              <button onClick={() => setDialogOpen({ open: true, openWith: "update" })} className='btn_primary mb-4'>{t("allDriversUpBtn")}</button>
                              <button onClick={() => setDialogOpen({ open: true, openWith: "delete" })} className='btn_primary bg-red-600 mb-4 ml-4'>{t("allDriversDelBtn")}</button>
                              <Dialog open={dialogOpen.open} onClose={() => setDialogOpen({ ...dialogOpen, open: false })}>
                                    <div className='p-4 sm:p-6 min-w-[350px]'>
                                          <div className='w-full mb-4 text-right'>
                                                <button onClick={() => setDialogOpen({ ...dialogOpen, open: false })} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                          </div>
                                          {
                                                open && <p className='mb-4 text-center font-bold'>{mss}</p>
                                          }
                                          {
                                                dialogOpen.openWith === "update" ?
                                                      <form onSubmit={handleSubmit}>
                                                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                                                                  {
                                                                        driverInfo &&
                                                                        <>
                                                                              <Input
                                                                                    title={t("allDriversUpDlgInOneTitle")}
                                                                                    lbl={t("allDriversUpDlgInOneLbl")}
                                                                                    type="text"
                                                                                    name="name"
                                                                                    value={driverInfo.name}
                                                                                    onChange={handleChange}
                                                                              />
                                                                              <Input
                                                                                    title={t("allDriversUpDlgInTwoTitle")}
                                                                                    lbl={t("allDriversUpDlgInTwoLbl")}
                                                                                    type="number"
                                                                                    name="phone"
                                                                                    value={driverInfo.phone}
                                                                                    onChange={handleChange}
                                                                              />
                                                                              <Input
                                                                                    title={t("allDriversUpDlgInThreeTitle")}
                                                                                    lbl={t("allDriversUpDlgInThreeLbl")}
                                                                                    type="password"
                                                                                    name="password"
                                                                                    value={driverInfo.password}
                                                                                    onChange={handleChange}
                                                                              />
                                                                              <Input
                                                                                    title={t("allDriversUpDlgInFourTitle")}
                                                                                    lbl={t("allDriversUpDlgInFourLbl")}
                                                                                    type="text"
                                                                                    name="location"
                                                                                    value={driverInfo.location}
                                                                                    onChange={handleChange}
                                                                              />
                                                                        </>
                                                                  }
                                                            </div>
                                                            <button className='btn_primary w-full'>{t("allDriverUpDlgInBtn")}</button>
                                                      </form> :
                                                      <>
                                                            {
                                                                  deleteInfo.map((item, i) => (
                                                                        <div key={i}>
                                                                              <h1 className='text-xl font-bold mb-2 text-[#0A5174]'>{t("allDriverDelDlgTitle")}: {i + 1}</h1>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3'>{t("allDriverTableHeaderOne")}: {item.name}</p>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3'>{t("allDriverTableHeaderTwo")}: {item.phone}</p>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3'>{t("allDriverTableHeaderThree")}: {item.password}</p>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3 mb-4'>{t("allDriverTableHeaderFour")}: {item.location}</p>
                                                                        </div>
                                                                  ))
                                                            }
                                                            <button className='btn_primary w-full bg-red-600 mt-4' onClick={handleDelete}>{t("allDriverDelDlgBtn")}</button>
                                                      </>
                                          }

                                    </div>
                              </Dialog>
                              <DonationsTable
                                    rows={allDrivers}
                                    columns={[{ field: "name", minWidth: 120, headerName: t("allDriverTableHeaderOne") },
                                    { field: "phone", minWidth: 120, headerName: t("allDriverTableHeaderTwo") },
                                    { field: "password", minWidth: 120, headerName: t("allDriverTableHeaderThree") },
                                    { field: "location", minWidth: 120, headerName: t("allDriverTableHeaderFour") },
                                    { field: "date", minWidth: 120, headerName: t("allDriverTableHeaderFive") }]}
                                    getRowId={(row) => row.phone}
                                    checkboxSelection={true}
                                    getRowHeight={() => 'auto'}
                                    onSelectionModelChange={(newSelectionModel) => {
                                          setSelectionModel(newSelectionModel);
                                    }}
                                    selectionModel={selectionModel}
                                    disableSelectionOnClick
                              />
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
      // if (URole !== "Super-Admin" || URole !== "Admin") {
      //       res.writeHead(302, { Location: "/admin/dashboard" });
      //       res.end();
      // }
      // const response = await axios.get(`https://rhma.sa/api/drivers`, {
      //       headers: {
      //             'Accept-Encoding': 'application/json',
      //       }
      // });
      // const getDrivers = await response.data;
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'all_drivers',
                  ])),
            }
      }
}

export default Drivers;