import { Dialog } from '@mui/material';
import axios from 'axios';
import JsBarcode from 'jsbarcode';
import jsPDF from 'jspdf';
import moment from 'moment/moment';
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
const PdfDownload = dynamic(() => import('../../../src/components/Admin/PdfDownload'), { ssr: false });

const SKUCreate = () => {
      const { t } = useTranslation("sku_generate");
      const { name } = parseCookies();
      const [dialogOpen, setDialogOpen] = useState(false);
      const [amount, setAmount] = useState('');
      const [SKU, setSKU] = useState([]);
      const [mess, setMess] = useState("");
      const router = useRouter()
      const URole = UseRole();
      useEffect(() => {
            const getHistory = () => {
                  const { token } = parseCookies();
                  if (token) {
                        if (URole === "Customer-Service" || URole === "Default") {
                              console.log(URole)
                              router.push('/admin/dashboard')
                        }
                  } else {
                        router.push('/admin');
                  }
            }
            getHistory()
      })
      const handleSubmit = (e) => {
            e.preventDefault();
            setSKU([]);
            const d = Date.now();
            const s = d.toString();
            const a = "35" + s;
            const n = +a;
            const tn = +amount;
            let arr = [];
            for (let i = 1; i <= tn; i++) {
                  const id = i + n;
                  arr.push(id);
            }
            setSKU(arr);
            setDialogOpen(true)
      }

      const handleSend = async () => {
            const ud = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            SKU.map(async (item) => {
                  try {
                        const res = await axios.post("/api/sku", { id: item, date: ud, skuStatus: "pending", generatedBy: name });
                        setMess(t("generateSKUSssMss"));
                  } catch (error) {
                        console.log(error)
                        setMess(t("generateSKUErrMss"))
                  }
            })
            setTimeout(() => { setDialogOpen(false); clearState() }, 2000)
      }
      const printDocument = () => {
            let pdf = new jsPDF('l', 'pt', [144, 72]);
            SKU.map((item, i, arr) => {
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
      const clearState = () => {
            setMess("");
            setSKU([]);
            setAmount("");
            return;
      }
      return (
            <AdminLayout>
                  <div className="gap">
                        <div className="px-4 md:px-6">
                              <div className='max-w-[600px] mx-auto'>
                                    <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("generateSKUMainTitle")}</h1>
                                    <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                                    <div className='p-4 border border-[#0A5174] rounded-md'>
                                          <form onSubmit={handleSubmit}>
                                                <Input
                                                      title={t("generateSKUInputTitle")}
                                                      lbl={t("generateSKUInputLbl")}
                                                      type="number"
                                                      name="sku"
                                                      value={amount}
                                                      onChange={(e) => setAmount(e.target.value)}
                                                />
                                                <button type="submit" className='btn_primary w-full mt-4'>{t("generateSKUInputBtn")}</button>
                                          </form>
                                    </div>
                                    <Dialog open={dialogOpen} onClose={() => { setDialogOpen(false); clearState() }}>
                                          <div className='p-4 sm:p-6 min-w-[250px]'>
                                                <div className='w-full mb-4 text-right'>
                                                      <button onClick={() => { setDialogOpen(false); clearState(); }} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                                </div>

                                                <div className="w-[320px] h-[600px] sm:w-[540px] my-4">
                                                      <div className='w-full h-full overflow-scroll'>
                                                            <PdfDownload SKU={SKU} />
                                                      </div>
                                                      {/* <PDFViewer style={{ width: "100%", height: "100%" }}>
                                                            <Document>
                                                                  <Page wrap={true} size={["384", "576"]} style={{ paddingTop: "5px", paddingRight: "5px", paddingLeft: '5px' }}>
                                                                        {
                                                                              SKU.map((item, i) => (
                                                                                    <SKUGenerator key={i} id={item} />
                                                                              ))
                                                                        }
                                                                  </Page>
                                                            </Document>
                                                      </PDFViewer> */}
                                                </div>
                                                {
                                                      mess &&
                                                      <p className='text-center text-lg font-bold text-gray-600'>{mess}</p>
                                                }
                                                <button onClick={() => { handleSend(); printDocument() }} className='btn_primary w-full mt-4'>{t("generateSKUDownloadBtn")}</button>
                                          </div>
                                    </Dialog>
                              </div>
                        </div>
                  </div>
            </AdminLayout>
      );
};
export async function getStaticProps(context) {
      // const { token, role } = parseCookies(context);
      // const URole = await getRole(role);

      // if (!token) {
      //       const { res } = context;
      //       res.writeHead(302, { Location: "/admin" });
      //       res.end();
      // }
      // if (URole === "Customer-Service" || URole === "Default") {
      //       res.writeHead(302, { Location: "/admin/dashboard" });
      //       res.end();
      // }
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'sku_generate',
                  ]))
            }
      }
}
export default SKUCreate;