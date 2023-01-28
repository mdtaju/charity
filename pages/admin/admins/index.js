import { Dialog } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import DonationsTable from '../../../src/components/Donate/DonationsTable';
import Input from '../../../src/components/Input';
import OptionInput from '../../../src/components/OptionInput';
import { getRole } from '../../../src/hoke/useRoleServer';

const Admins = ({ admins }) => {
      const { t } = useTranslation("all_admins");
      const router = useRouter();
      const [selectionModel, setSelectionModel] = useState([]);
      const [dialogOpen, setDialogOpen] = useState({
            open: false,
            openWith: "update"
      });
      const [authorization, setAuthorization] = useState('');
      const [deleteInfo, setDeleteInfo] = useState([]);
      // const [adminName, setAdminName] = useState("");
      const [adminInfo, setAdminInfo] = useState({
            name: "",
            phone: "",
            password: "",
      })
      const [snakeState, setSnakeState] = useState({
            open: false,
            mss: ""
      });
      useEffect(() => {
            const getAdmin = admins.find((item) => item.phone === selectionModel[0]);
            const getAdmins = admins.filter((item) => {
                  return selectionModel.indexOf(item.phone) > -1
            })
            getAdmins && setDeleteInfo(getAdmins);
            if (getAdmin) {
                  // const getAccess = getAdmin.access.split(",");
                  // setAuthorization(getAccess);
                  setAdminInfo(getAdmin);
            }

            // getAdmin && setAdminName(getAdmin.name)
      }, [admins, selectionModel]);
      const { open, mss } = snakeState;
      const handleChange = ({ target: { name, value } }) => {
            setAdminInfo({ ...adminInfo, [name]: value })
      }
      const handleDelete = () => {
            selectionModel.map(async (item) => {
                  try {
                        const res = await axios.delete("/api/admin/modify", { data: { id: item } });
                        setSnakeState({ open: true, mss: t("allAdminsDelDlgSccMss") });
                        router.replace(router.asPath);
                  } catch (error) {
                        setSnakeState({ open: true, mss: t("allAdminsDelDlgErrMss") })
                  }
            })

      }
      const handleSubmit = async (e) => {
            e.preventDefault();
            const convertAuth = authorization.toString();
            const firstElement = selectionModel[0];
            const allData = {
                  ...adminInfo,
                  role: authorization,
                  id: firstElement
            }
            try {
                  const res = await axios.post("/api/admin/modify", allData);
                  setSnakeState({ open: true, mss: t("allAdminsUpDlgSccMss") });
                  setAdminInfo({
                        name: "",
                        phone: "",
                        password: "",
                  })
                  setAuthorization('');
                  setTimeout(() => { setDialogOpen(false); setSnakeState({ open: false, mss: "" }); }, 2000);
                  router.replace(router.asPath);
            } catch (error) {
                  setSnakeState({ open: true, mss: t("allAdminsDelDlgErrMss") })
            }
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("allAdminsTitle")}</h1>
                              <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                              {
                                    selectionModel.length !== 0 &&
                                    <>
                                          <button onClick={() => setDialogOpen({ open: true, openWith: "update" })} className='btn_primary mb-4'>{t("allAdminsUpBtn")}</button>
                                          <button onClick={() => setDialogOpen({ open: true, openWith: "delete" })} className='btn_primary bg-red-600 mb-4 ml-4'>{t("allAdminsDelBtn")}</button>
                                    </>
                              }
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
                                                                  <Input
                                                                        title={t("allAdminsUpDlgInOneTitle")}
                                                                        lbl={t("allAdminsUpDlgInOneLbl")}
                                                                        type="text"
                                                                        name="name"
                                                                        value={adminInfo.name}
                                                                        onChange={handleChange}
                                                                  />
                                                                  <Input
                                                                        title={t("allAdminsUpDlgInTwoTitle")}
                                                                        lbl={t("allAdminsUpDlgInTwoLbl")}
                                                                        type="number"
                                                                        name="phone"
                                                                        value={adminInfo.phone}
                                                                        onChange={handleChange}
                                                                  />
                                                                  <Input
                                                                        title={t("allAdminsUpDlgInThreeTitle")}
                                                                        lbl={t("allAdminsUpDlgInThreeLbl")}
                                                                        type="password"
                                                                        name="password"
                                                                        value={adminInfo.password}
                                                                        onChange={handleChange}
                                                                  />
                                                                  <OptionInput
                                                                        title={t("allAdminsUpDlgInFourTitle")}
                                                                        lbl={t("allAdminsUpDlgInFourLbl")}
                                                                        options={["Default", "Operation", "Customer-Service", "Admin", "Super-Admin"]}
                                                                        state={authorization}
                                                                        setState={setAuthorization}
                                                                  />

                                                            </div>
                                                            <button className='btn_primary w-full'>{t("allAdminsUpDlgInBtn")}</button>
                                                      </form> :
                                                      <>
                                                            {
                                                                  deleteInfo.map((item, i) => (
                                                                        <div key={i}>
                                                                              <h1 className='text-xl font-bold mb-2 text-[#0A5174]'>{t("allAdminsDelDlgTitle")}: {i + 1}</h1>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3'>{t("allAdminsDelDlgName")}: {item.name}</p>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3'>{t("allAdminsDelDlgPhone")}: {item.phone}</p>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3'>{t("allAdminsDelDlgPassword")}: {item.password}</p>
                                                                              <p className='text-sm font-semibold text-gray-600 pl-3 mb-4'>{t("allAdminsDelDlgRole")}: {item.role}</p>
                                                                        </div>
                                                                  ))
                                                            }
                                                            <button className='btn_primary w-full bg-red-600 mt-4' onClick={handleDelete}>{t("allAdminsDelDlgBtn")}</button>
                                                      </>
                                          }

                                    </div>
                              </Dialog>
                              <DonationsTable
                                    rows={admins}
                                    columns={[{ field: "name", minWidth: 120, headerName: t("allAdminsTableHeaderOne") },
                                    { field: "phone", minWidth: 120, headerName: t("allAdminsTableHeaderTwo") },
                                    { field: "password", minWidth: 120, headerName: t("allAdminsTableHeaderThree") },
                                    { field: "role", minWidth: 120, headerName: t("allAdminsTableHeaderFour") },
                                    { field: "date", minWidth: 120, headerName: t("allAdminsTableHeaderFive") }]}
                                    getRowHeight={() => 'auto'}
                                    getRowId={(row) => row.phone}
                                    checkboxSelection={true}
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
export async function getServerSideProps(context) {
      const { token, role } = parseCookies(context);
      const URole = await getRole(role);
      const { res } = context;

      if (!token) {
            res.writeHead(302, { Location: "/admin" });
            res.end();
      }
      if (URole !== "Super-Admin") {
            res.writeHead(302, { Location: "/admin/dashboard" });
            res.end();
      }
      const response = await axios.get(`https://rhma.sa/api/admin`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const getAdmins = await response.data
      return {
            props: {
                  admins: getAdmins,
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'all_admins',
                  ]))
            }
      }
}
export default Admins;