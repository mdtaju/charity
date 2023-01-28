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
const WarehouseUpdate = () => {
      const { t } = useTranslation("in_stock");
      const { name } = parseCookies();
      const [stockId, setStockId] = useState("")
      // const [inStack, setInStack] = useState('');
      const [isUsable, setIsUsable] = useState('');
      const [category, setCategory] = useState('');
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
      // const handleChange = ({ target: { name, value } }) => {
      //       setUpdateInfo({ ...updateInfo, [name]: value });
      // }
      const handleSubmit = async (e) => {
            e.preventDefault();
            const ud = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            try {
                  const res = await axios.post("/api/instock-update", {
                        id: stockId,
                        name: name,
                        date: ud,
                        condition: isUsable,
                        category: category,
                        skuStatus: "used",
                        stockStatus: "in-stock"
                  })
                  if (res.data.isSuccess) {
                        setSnakeState({ ...snakeState, openMss: true, mss: t("inputStockSccMss") });
                  } else {
                        setSnakeState({ ...snakeState, openMss: true, mss: res.data.message });
                  }
                  setStockId("");
                  setIsUsable("");
                  setCategory("");
            } catch (error) {
                  setSnakeState({ ...snakeState, openMss: true, mss: t("inputStockErrMss") });
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
                              <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("inStockMainTitle")}</h1>
                              <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                              <div className='p-4 border border-[#0A5174] rounded-md'>
                                    <form onSubmit={handleSubmit}>
                                          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                                                <Input
                                                      title={t("inStockInputOneTitle")}
                                                      lbl={t("inStockInputOneLbl")}
                                                      type="number"
                                                      name="id"
                                                      value={stockId}
                                                      onChange={(e) => setStockId(e.target.value)}
                                                />
                                                <OptionInput
                                                      title={t("inStockInputTwoTitle")}
                                                      lbl={t("inStockInputTwoLbl")}
                                                      options={["Usable", "Unusable"]}
                                                      state={isUsable}
                                                      setState={setIsUsable}
                                                />
                                                <OptionInput
                                                      title={t("inStockInputThreeTitle")}
                                                      lbl={t("inStockInputThreeLbl")}
                                                      options={["Clothes", "Furniture", "Electric", "Electronics", "Carpets", "Blankets", "Trolley", "Others"]}
                                                      state={category}
                                                      setState={setCategory}
                                                />
                                          </div>
                                          <button type="submit" className='btn_primary w-full'>{t("inStockInputBtn")}</button>
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
                        'in_stock',
                  ]))
            }
      }
}
export default WarehouseUpdate;