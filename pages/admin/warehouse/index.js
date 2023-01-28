import { Dialog } from '@mui/material';
import axios from 'axios';
import JsBarcode from 'jsbarcode';
import jsPDF from 'jspdf';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import DonationsTable from '../../../src/components/Donate/DonationsTable';
import OptionInput from '../../../src/components/OptionInput';
import { UseRole } from '../../../src/hoke/useRole';
import { getRole } from '../../../src/hoke/useRoleServer';
const Warehouse = ({ donations }) => {
      const { t } = useTranslation("all_sku");
      const role = UseRole();
      const [allDonations, setAllDonations] = useState([]);
      const [selectionModel, setSelectionModel] = useState([]);
      const [dialogOpen, setDialogOpen] = useState(false);
      const [skuStatus, setSkuStatus] = useState("");
      const [snakeState, setSnakeState] = useState("");
      const [forDelete, setForDelete] = useState([]);
      const router = useRouter();
      useEffect(() => {
            setAllDonations(donations);
            if (skuStatus !== "") {
                  const skuFilter = donations.filter((item) => item.skuStatus === skuStatus.toLowerCase());
                  setAllDonations(skuFilter);
                  let toDelete = [];
                  skuFilter.map((item) => {
                        toDelete.push(item.id);
                  })
                  setForDelete(toDelete);
            }
      }, [donations, selectionModel, skuStatus]);

      const handleReset = () => {
            setAllDonations(donations);
            setSkuStatus("")
            setForDelete([]);
            setSelectionModel([]);
      }

      const skuGenerate = () => {
            let pdf = new jsPDF('l', 'pt', [144, 72]);
            selectionModel.map((item, i, arr) => {
                  let canvas;
                  canvas = document.createElement('canvas');
                  JsBarcode(canvas, item);
                  const barcode = canvas.toDataURL();
                  pdf.addImage(barcode, 'SVG', 0, 0, 144, 72);
                  if (arr.length - 1 !== i) {
                        pdf.addPage([144, 72], 'l')
                  }
            })
            pdf.save("sku.pdf")
      }

      const handleDelete = () => {
            if (selectionModel.length !== 0) {
                  selectionModel.map(async (item) => {
                        try {
                              await axios.delete("/api/warehouse", { data: { id: item } });
                              setSnakeState(t("allSKUDelMss"));
                              router.replace(router.asPath)
                              setTimeout(() => { setDialogOpen(false) }, 2000);
                        } catch (error) {
                              setSnakeState(t("allSKUErrMss"));
                        }
                  })
            }
            if (forDelete.length !== 0) {
                  forDelete.map(async (item) => {
                        try {
                              const res = await axios.delete("/api/warehouse", { data: { id: item } });
                              setSnakeState(t("allSKUDelMss"));
                              router.replace(router.asPath)
                        } catch (error) {
                              setSnakeState(t("allSKUErrMss"));
                        }
                  })
            }
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <div className='flex items-center justify-between'>
                                    <div>
                                          <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("allSKUMainTitle")}</h1>
                                          <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                                    </div>
                              </div>
                              {
                                    (role !== "Default") &&
                                    <div className='flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 w-[300px] sm:w-[500px] mb-6'>
                                          <div className='w-full'>
                                                <OptionInput
                                                      title={t("allSKUInputTitle")}
                                                      lbl={t("allSKUInputLbl")}
                                                      options={["Used", "Pending"]}
                                                      state={skuStatus}
                                                      setState={setSkuStatus}
                                                />
                                          </div>
                                          {
                                                (role === "Super-Admin" || role === "Admin") &&
                                                <>
                                                      <button disabled={(selectionModel.length === 0 && forDelete.length === 0) ? true : false} onClick={() => setDialogOpen(true)} className='btn_primary bg-red-600'>{t("allSKUInputBtnDelete")}</button>
                                                      <button onClick={handleReset} className='btn_primary bg-green-600'>{t("allSKUInputBtnReset")}</button>
                                                      {
                                                            selectionModel.length !== 0 &&
                                                            <button onClick={skuGenerate} className='btn_primary whitespace-nowrap'>{t("allSKUInputBtnGenerate")}</button>
                                                      }
                                                </>
                                          }
                                    </div>
                              }

                              <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                                    <div className='p-4 sm:p-6 min-w-[350px]'>
                                          <div className='w-full mb-4 text-right'>
                                                <button onClick={() => setDialogOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                                <div className='w-full text-left'>
                                                      <h1 className='text-lg text-[#0A5174] font-bold mb-4'>{t("allSKUDialogTitle")}</h1>
                                                      {
                                                            selectionModel.length !== 0 &&
                                                            selectionModel.map((item, i) => (
                                                                  <p className='mb-2' key={i}>{item}</p>
                                                            ))
                                                      }
                                                      {
                                                            forDelete.length !== 0 &&
                                                            forDelete.map((item, i) => (
                                                                  <p className='mb-2' key={i}>{item}</p>
                                                            ))
                                                      }
                                                      {
                                                            snakeState &&
                                                            <p className='text-center'>{snakeState}</p>
                                                      }
                                                      <button onClick={handleDelete} className="btn_primary bg-red-600 w-full mt-4" >{t("allSKUDialogBtn")}</button>
                                                </div>
                                          </div>
                                    </div>
                              </Dialog>
                              <DonationsTable
                                    rows={allDonations}
                                    columns={[
                                          { field: 'id', minWidth: 150, headerName: t("allSKUTableHeaderOne"), },
                                          { field: 'date', minWidth: 150, headerName: t("allSKUTableHeaderTwo") },
                                          { field: 'generatedBy', minWidth: 150, headerName: t("allSKUTableHeaderThree") },
                                          { field: 'skuStatus', minWidth: 150, headerName: t("allSKUTableHeaderFour") },
                                    ]}
                                    getRowHeight={() => 'auto'}
                                    checkboxSelection={true}
                                    onSelectionModelChange={(newSelectionModel) => {
                                          setSelectionModel(newSelectionModel);
                                    }}
                                    disableSelectionOnClick
                                    selectionModel={selectionModel}
                              // rowsPerPageOptions={10}
                              />
                        </div>
                  </div>
            </AdminLayout>
      );
};

export async function getServerSideProps(context) {
      const { token, role } = parseCookies(context);
      const URole = await getRole(role);
      if (!token) {
            const { res } = context;
            res.writeHead(302, { Location: "/admin" });
            res.end();
      }
      if (URole === "Customer-Service" || URole === "Default") {
            res.writeHead(302, { Location: "/admin/dashboard" });
            res.end();
      }
      const res = await axios.get(`https://rhma.sa/api/warehouse`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      return {
            props: {
                  donations: res.data,
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'all_sku',
                  ]))
            }
      }
}

export default Warehouse;