import { Popover } from '@mui/material';
import axios from 'axios';
import moment from 'moment/moment';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import DateRangeFilter from '../../../src/components/Admin/DateRangeFilter';
import DonationsTable from '../../../src/components/Donate/DonationsTable';
import OptionInput from '../../../src/components/OptionInput';
import { UseRole } from '../../../src/hoke/useRole';

const WarehouseStatus = () => {
      const { t } = useTranslation("stocks_status");
      const [dateRange, setDateRange] = useState([
            {
                  startDate: moment.utc().utcOffset("GMT+03:00")._d,
                  endDate: moment.utc().utcOffset("GMT+03:00")._d,
                  key: 'selection'
            }
      ]);
      const [donations, setDonations] = useState([]);
      const [allDonations, setAllDonations] = useState([]);
      const [anchorEl, setAnchorEl] = useState(null);
      const [inStack, setInStack] = useState('');
      const [isUsable, setIsUsable] = useState('');
      const URole = UseRole();
      const router = useRouter();
      useEffect(() => {
            const getHistory = async () => {
                  const res = await axios.get(`https://rhma.sa/api/warehouse`, {
                        headers: {
                              'Accept-Encoding': 'application/json',
                        }
                  });
                  const getDonations = await res.data;
                  setDonations(getDonations);
                  const stockFilter = await getDonations.filter((item) => item.skuStatus === "used");
                  setAllDonations(stockFilter);
                  const { token } = parseCookies();
                  if (token) {
                        if (URole === "Customer-Service") {
                              console.log(URole)
                              router.push('/admin/dashboard')
                        }
                  } else {
                        router.push('/admin');
                  }
            }
            getHistory()
      }, [])
      const [columns, setColumns] = useState([
            { field: 'id', minWidth: 150, headerName: t("stocksStatusTableHeaderOne"), },
            { field: 'inStock_date', minWidth: 180, headerName: t("stocksStatusTableHeaderTwo") },
            { field: 'isUsable', minWidth: 150, headerName: t("stocksStatusInputTwoTitle") },
            { field: 'category', minWidth: 150, headerName: t("stocksStatusTableHeaderFour") },
            { field: 'stockStatus', minWidth: 150, headerName: t("stocksStatusTableHeaderFive") },
            { field: 'inStock_update_by', minWidth: 150, headerName: t("stocksStatusTableHeaderSix") },
            { field: 'stockOut_date', minWidth: 180, headerName: t("stocksStatusTableHeaderSeven") },
            { field: 'stockReason', minWidth: 150, headerName: t("stocksStatusTableHeaderEight") },
            { field: 'comment', minWidth: 150, headerName: t("stocksStatusTableHeaderNine") },
            { field: 'price', minWidth: 150, headerName: t("stocksStatusTableHeaderTen") },
            { field: 'stockOut_update_by', minWidth: 150, headerName: t("stocksStatusTableHeaderSix") },
      ]);

      const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;

      const getDateFilter = (data, setData) => {
            const filterWithYear = data.filter((item) => {
                  const zone = moment(item.date, 'DD/MM/YYYY h:mm A').toDate();
                  const conDate = zone.toUTCString();
                  const conItemDate = new Date(conDate);
                  const conStrDateUTC = dateRange[0].startDate.toUTCString();
                  const conEndDateUTC = dateRange[0].endDate.toUTCString();
                  const conStrRngDate = new Date(conStrDateUTC);
                  const conEndRngDate = new Date(conEndDateUTC);
                  return conItemDate.getFullYear() >= conStrRngDate.getFullYear() && conItemDate.getFullYear() <= conEndRngDate.getFullYear()
            })
            const filterWithMonth = filterWithYear.filter((item) => {
                  const zone = moment(item.date, 'DD/MM/YYYY h:mm A').toDate();
                  const conDate = zone.toUTCString();
                  const conItemDate = new Date(conDate);
                  const conStrDateUTC = dateRange[0].startDate.toUTCString();
                  const conEndDateUTC = dateRange[0].endDate.toUTCString();
                  const conStrRngDate = new Date(conStrDateUTC);
                  const conEndRngDate = new Date(conEndDateUTC);
                  return conItemDate.getMonth() >= conStrRngDate.getMonth() && conItemDate.getMonth() <= conEndRngDate.getMonth()
            })
            const filterWithDate = filterWithMonth.filter((item) => {
                  const zone = moment(item.date, 'DD/MM/YYYY h:mm A').toDate();
                  const conDate = zone.toUTCString();
                  const conItemDate = new Date(conDate);
                  const conStrDateUTC = dateRange[0].startDate.toUTCString();
                  const conEndDateUTC = dateRange[0].endDate.toUTCString();
                  const conStrRngDate = new Date(conStrDateUTC);
                  const conEndRngDate = new Date(conEndDateUTC);
                  return conItemDate.getDate() >= conStrRngDate.getDate() && conItemDate.getDate() <= conEndRngDate.getDate()
            })
            setData(filterWithDate);
      }
      const handleDateFilter = () => {
            getDateFilter(donations, setAllDonations);
      }
      const handleReset = () => {
            const stockFilter = donations.filter((item) => item.skuStatus === "used");
            setAllDonations(stockFilter);
            setColumns([
                  { field: 'id', minWidth: 150, headerName: t("stocksStatusTableHeaderOne"), },
                  { field: 'inStock_date', minWidth: 180, headerName: t("stocksStatusTableHeaderTwo") },
                  { field: 'isUsable', minWidth: 150, headerName: t("stocksStatusInputTwoTitle") },
                  { field: 'category', minWidth: 150, headerName: t("stocksStatusTableHeaderFour") },
                  { field: 'stockStatus', minWidth: 150, headerName: t("stocksStatusTableHeaderFive") },
                  { field: 'inStock_update_by', minWidth: 150, headerName: t("stocksStatusTableHeaderSix") },
                  { field: 'stockOut_date', minWidth: 180, headerName: t("stocksStatusTableHeaderSeven") },
                  { field: 'stockReason', minWidth: 150, headerName: t("stocksStatusTableHeaderEight") },
                  { field: 'comment', minWidth: 150, headerName: t("stocksStatusTableHeaderNine") },
                  { field: 'price', minWidth: 150, headerName: t("stocksStatusTableHeaderTen") },
                  { field: 'stockOut_update_by', minWidth: 150, headerName: t("stocksStatusTableHeaderSix") },
            ])
      }

      const handleFilter = () => {
            if (inStack !== "") {
                  let stocks;
                  inStack === "In Stocks" ? stocks = "in-stock" : stocks = "stock-out"
                  const filterStock = donations.filter((item) => item.stockStatus === stocks);
                  setAllDonations(filterStock);
                  if (inStack === "Out of Stocks") {
                        setColumns([
                              { field: 'id', minWidth: 150, headerName: t("stocksStatusTableHeaderOne"), },
                              { field: 'stockOut_date', minWidth: 180, headerName: t("stocksStatusTableHeaderSeven") },
                              { field: 'stockReason', minWidth: 150, headerName: t("stocksStatusTableHeaderEight") },
                              { field: 'comment', minWidth: 150, headerName: t("stocksStatusTableHeaderNine") },
                              { field: 'price', minWidth: 150, headerName: t("stocksStatusTableHeaderTen") },
                              { field: 'stockOut_update_by', minWidth: 150, headerName: t("stocksStatusTableHeaderSix") },
                        ])
                  } else {
                        setColumns([
                              { field: 'id', minWidth: 150, headerName: t("stocksStatusTableHeaderOne"), },
                              { field: 'inStock_date', minWidth: 180, headerName: t("stocksStatusTableHeaderTwo") },
                              { field: 'isUsable', minWidth: 150, headerName: t("stocksStatusInputTwoTitle") },
                              { field: 'category', minWidth: 150, headerName: t("stocksStatusTableHeaderFour") },
                              { field: 'stockStatus', minWidth: 150, headerName: t("stocksStatusTableHeaderFive") },
                              { field: 'inStock_update_by', minWidth: 150, headerName: t("stocksStatusTableHeaderSix") },
                        ])
                  }
            }

            if (isUsable !== "") {
                  const filterUsability = donations.filter((item) => item.isUsable === isUsable);
                  setAllDonations(filterUsability);
            }
      }

      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <div className='flex items-center justify-between'>
                                    <div>
                                          <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("stocksStatusMainTitle")}</h1>
                                          <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                                    </div>
                                    <div className='flex gap-4'>
                                          <button
                                                className='btn_primary'
                                                aria-describedby={id}
                                                onClick={handleClick}
                                          >{t("stocksStatusDateFilter")}</button>
                                          <button
                                                className='btn_primary bg-green-600'
                                                onClick={handleReset}
                                          >{t("stocksStatusReset")}</button>
                                    </div>
                                    <Popover
                                          // className='w-fit'
                                          id={id}
                                          open={open}
                                          anchorEl={anchorEl}
                                          onClose={handleClose}
                                          elevation={16}
                                          anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                          }}
                                          transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                          }}
                                    >
                                          <div className='px-4 py-6 flex flex-col gap-4 w-fit'>
                                                <DateRangeFilter
                                                      state={dateRange}
                                                      setState={setDateRange}
                                                />
                                                <button className='btn_primary w-full' onClick={handleDateFilter}>{t("stocksStatusDateFilterFilter")}</button>
                                          </div>
                                    </Popover>
                              </div>
                              <div className='w-[300px] sm:w-[520px] flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mb-4'>
                                    <div className='w-1/2'>
                                          <OptionInput
                                                title={t("stocksStatusInputOneTitle")}
                                                lbl={t("stocksStatusInputOneLbl")}
                                                options={["In Stocks", "Out of Stocks"]}
                                                state={inStack}
                                                setState={setInStack}
                                          />
                                    </div>
                                    <div className='w-1/2'>
                                          <OptionInput
                                                title={t("stocksStatusInputTwoTitle")}
                                                lbl={t("stocksStatusInputTwoLbl")}
                                                options={["Usable", "Unusable"]}
                                                state={isUsable}
                                                setState={setIsUsable}
                                          />
                                    </div>
                                    <button onClick={handleFilter} className="btn_primary">{t("stocksStatusDateFilterFilter")}</button>
                              </div>
                              <DonationsTable
                                    rows={allDonations}
                                    columns={columns}
                                    disableSelectionOnClick
                                    getRowHeight={() => 'auto'}
                              />
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
      // if (URole === "Customer-Service") {
      //       res.writeHead(302, { Location: "/admin/dashboard" });
      //       res.end();
      // }
      // const res = await axios.get(`https://rhma.sa/api/warehouse`, {
      //       headers: {
      //             'Accept-Encoding': 'application/json',
      //       }
      // });
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'stocks_status',
                  ]))
            }
      }
}

export default WarehouseStatus;