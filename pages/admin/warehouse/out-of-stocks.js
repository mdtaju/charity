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

const WarehouseUpdateOut = () => {
      const { t } = useTranslation("out_stock");
      const { name } = parseCookies();
      const [stockId, setStockId] = useState("")
      const [reason, setReason] = useState('');
      const [comment, setComment] = useState('');
      const [price, setPrice] = useState('');
      const [snakeState, setSnakeState] = useState({
            openMss: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });
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
      const { vertical, horizontal, openMss, mss } = snakeState;
      const handleClose = () => {
            setSnakeState({ ...snakeState, openMss: false, mss: "" });
      };
      const handleSubmit = async (e) => {
            e.preventDefault();
            const ud = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            if (reason === "Donated") {
                  // id, date, name, status, reason, comment
                  try {
                        const res = await axios.post("/api/stockout-update", {
                              id: stockId,
                              date: ud,
                              name: name,
                              status: "stock-out",
                              reason: reason,
                              comment: comment,
                        })
                        if (res.data.isSuccess) {
                              setSnakeState({ ...snakeState, openMss: true, mss: t("stockOutSccMss") });
                        } else {
                              setSnakeState({ ...snakeState, openMss: true, mss: res.data.message });
                        }
                        setStockId("");
                        setReason("");
                        setComment("");
                  } catch (error) {
                        setSnakeState({ ...snakeState, openMss: true, mss: t("stockOutErrMss") });
                  }
            } else {
                  try {
                        const res = await axios.post("/api/stockout-update", {
                              id: stockId,
                              date: ud,
                              name: name,
                              status: "stock-out",
                              reason: reason,
                              comment: price,
                        })
                        if (res.data.isSuccess) {
                              setSnakeState({ ...snakeState, openMss: true, mss: "Successfully update database." });
                        } else {
                              setSnakeState({ ...snakeState, openMss: true, mss: res.data.message });
                        }
                        setStockId("");
                        setReason("");
                        setPrice("");
                  } catch (error) {
                        console.log(error)
                        setSnakeState({ ...snakeState, openMss: true, mss: "Something went wrong. Please try again." });
                  }
            }
      }
      return (
            <AdminLayout>
                  <div className="gap">
                        <div className="px-4 md:px-6 max-w-[750px] mx-auto">
                              <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={openMss}
                                    onClose={handleClose}
                                    message={mss}
                                    key={vertical + horizontal}
                              />
                              <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("stockOutMainTitle")}</h1>
                              <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                              <div className='p-4 border border-[#0A5174] rounded-md'>
                                    <form onSubmit={handleSubmit}>
                                          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                                                <Input
                                                      title={t("stockOutInputTitle")}
                                                      lbl={t("stockOutInputLbl")}
                                                      type="number"
                                                      value={stockId}
                                                      onChange={(e) => setStockId(e.target.value)}
                                                />
                                                <OptionInput
                                                      title={t("stockOutInputTwoTitle")}
                                                      lbl={t("stockOutInputTwoLbl")}
                                                      options={["Donated", "Sold"]}
                                                      state={reason}
                                                      setState={setReason}
                                                />
                                                {
                                                      reason === "Donated" &&
                                                      <Input
                                                            title={t("stockOutInputThreeTitle")}
                                                            lbl={t("stockOutInputThreeLbl")}
                                                            type="text"
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                      />
                                                }{
                                                      reason === "Sold" &&
                                                      <Input
                                                            title={t("stockOutInputFourTitle")}
                                                            lbl={t("stockOutInputFourLbl")}
                                                            type="number"
                                                            value={price}
                                                            onChange={(e) => setPrice(e.target.value)}
                                                      />
                                                }
                                          </div>
                                          <button type="submit" className='btn_primary w-full'>{t("stockOutInputBtn")}</button>
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
                        'out_stock',
                  ]))
            }
      }
}
export default WarehouseUpdateOut;