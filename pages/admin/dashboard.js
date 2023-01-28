import { Popover, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import moment from 'moment/moment';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../src/components/Admin/AdminLayout';
import DashboardChart from '../../src/components/Admin/DashboardChart';
import DashboardCircle from '../../src/components/Admin/DashboardCircle';
import DateRangeFilter from '../../src/components/Admin/DateRangeFilter';
import Progressbar from '../../src/components/Admin/Progressbar';

const Dashboard = ({ donations, drivers, admins, warehouse }) => {
      const { t } = useTranslation("dashboard");
      const [dateRange, setDateRange] = useState([
            {
                  startDate: moment.utc().utcOffset("GMT+03:00")._d,
                  endDate: moment.utc().utcOffset("GMT+03:00")._d,
                  key: 'selection'
            }
      ]);
      const [allDonations, setAllDonations] = useState([]);
      const [allDrivers, setAllDrivers] = useState([]);
      const [allAdmins, setAllAdmins] = useState([]);
      const [allWarehouse, setAllWarehouse] = useState([]);
      const [inStock, setInStock] = useState([]);
      const [outStock, setOutStock] = useState([]);
      const [anchorEl, setAnchorEl] = useState(null);
      const [picked, setPicked] = useState([]);
      const [closed, setClosed] = useState([]);
      const [donationChart, setDonationChart] = useState([]);
      const [receivedChart, setReceivedChart] = useState([]);
      const [pendingChart, setPendingChart] = useState([]);
      const [closedChart, setClosedChart] = useState([]);

      const [chartYear, setChartYear] = useState(null);

      const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
      };

      const chartMonthFilter = (data, don, received, pending, closedDon, monthName) => {
            const filterMonths = data.filter((item) => {
                  const zone = moment(item.date, 'DD/MM/YYYY h:mm A').toDate();
                  const conDate = zone.toUTCString();
                  const conItemDate = new Date(conDate);
                  return conItemDate.getMonth() === monthName
            });
            don.push(filterMonths.length);
            const monthWiseFilterForPending = filterMonths.filter((item) => item.trackStatus <= 2);
            const monthWiseFilterForReceived = filterMonths.filter((item) => item.trackStatus === 3);
            const monthWishFilterForClosed = filterMonths.filter((item) => item.picked === "Closed");
            received.push(monthWiseFilterForReceived.length);
            pending.push(monthWiseFilterForPending.length);
            closedDon.push(monthWishFilterForClosed.length);
      }

      const chartFilter = (year) => {
            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const filterWithYear = donations.filter((item) => {
                  const zone = moment(item.date, 'DD/MM/YYYY h:mm A').toDate();
                  const conDate = zone.toUTCString();
                  const conItemDate = new Date(conDate);
                  return conItemDate.getFullYear() === year
            });

            let allDon = [];
            let receivedDon = [];
            let pendingDon = [];

            month.map((item, i) => {
                  chartMonthFilter(filterWithYear, allDon, receivedDon, pendingDon, i);
            })
            setDonationChart(allDon);
            setReceivedChart(receivedDon);
            setPendingChart(pendingDon);
      }
      const handleChart = () => {
            const d = moment.utc().utcOffset("GMT+03:00")._d;
            if (chartYear) {
                  const fullYear = chartYear.$d.getFullYear();
                  chartFilter(fullYear)
            } else {
                  chartFilter(d.getFullYear())
            }
      }
      useEffect(() => {
            if (donations && drivers && admins) {
                  setAllDonations(donations)
                  setAllDrivers(drivers)
                  setAllAdmins(admins)
                  const getAllUsed = warehouse.filter((item) => item.skuStatus === 'used');

                  // const getAllPicked = donations.filter((item) => item.picked !==)

                  const getPicked = donations.filter((item) => item.trackStatus === 2);
                  setPicked(getPicked);
                  const getClosed = donations.filter((item) => item.picked === 'Closed')
                  setClosed(getClosed);

                  const getInStock = getAllUsed.filter((item) => item.stockStatus === "in-stock");
                  const getOutStock = getAllUsed.filter((item) => item.stockStatus === "stock-out");

                  setInStock(getInStock);
                  setOutStock(getOutStock);
            }

            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const d = moment.utc().utcOffset("GMT+03:00")._d;
            const filterWithYear = donations.filter((item) => {
                  const zone = moment(item.date, 'DD/MM/YYYY h:mm A').toDate();
                  const conDate = zone.toUTCString();
                  const conItemDate = new Date(conDate);
                  return conItemDate.getFullYear() === d.getFullYear()
            });

            let allDon = [];
            let receivedDon = [];
            let pendingDon = [];
            let closedDon = [];

            month.map((item, i) => {
                  chartMonthFilter(filterWithYear, allDon, receivedDon, pendingDon, closedDon, i);
            })
            setDonationChart(allDon);
            setReceivedChart(receivedDon);
            setPendingChart(pendingDon);
            setClosedChart(closedDon);
      }, [donations, drivers, admins, warehouse]);
      const data = [
            {
                  labels: [t("dashSecFourMonthJanuary"), t("dashSecFourMonthFebruary"), t("dashSecFourMonthMarch"), t("dashSecFourMonthApril"), t("dashSecFourMonthMay"), t("dashSecFourMonthJune"), t("dashSecFourMonthJuly"), t("dashSecFourMonthAugust"), t("dashSecFourMonthSeptember"), t("dashSecFourMonthOctober"), t("dashSecFourMonthNovember"), t("dashSecFourMonthDecember")],
                  data: [
                        {
                              values: donationChart,
                        },
                        {
                              values: receivedChart,
                        },
                        {
                              values: pendingChart,
                        },
                        {
                              values: closedChart,
                        },
                  ],
            },
      ];
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
            return filterWithDate;
      }

      const handleFilterDonation = () => {
            const donResult = getDateFilter(donations, setAllDonations);
            getDateFilter(drivers, setAllDrivers);
            getDateFilter(admins, setAllAdmins);
            const warResult = getDateFilter(warehouse, setAllWarehouse);

            const getAllUsed = warResult.filter((item) => item.skuStatus === 'used');

            const getPicked = donResult.filter((item) => item.trackStatus === 2);
            setPicked(getPicked);

            const getInStock = getAllUsed.filter((item) => item.stockStatus === "in-stock");
            const getOutStock = getAllUsed.filter((item) => item.stockStatus === "stock-out");

            setInStock(getInStock);
            setOutStock(getOutStock);
      }
      const handleReset = () => {
            if (donations && drivers && admins) {
                  setAllDonations(donations)
                  setAllDrivers(drivers)
                  setAllAdmins(admins)
                  setAllWarehouse(warehouse)
                  const getPicked = donations.filter((item) => item.trackStatus === 2);
                  setPicked(getPicked);

                  const getInStock = warehouse.filter((item) => item.stockStatus === "in-stock");
                  const getOutStock = warehouse.filter((item) => item.stockStatus === "stock-out");
                  setInStock(getInStock);
                  setOutStock(getOutStock)
            }
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <div className='flex gap-6 w-fit mx-auto flex-col md:flex-row justify-between items-center'>
                                    <div className='bg-green-600 drop-shadow-sm rounded-sm p-4 text-white w-[200px] text-center'>
                                          <p className='text-4xl font-bold'>{drivers ? allDrivers.length : 0}</p>
                                          <h1 className='text-base font-bold'>{t("dashSecOneBlgOne")}</h1>
                                    </div>
                                    <div className='bg-yellow-600 drop-shadow-sm rounded-sm p-4 text-white w-[200px] text-center'>
                                          <p className='text-4xl font-bold'>{admins ? allAdmins.length : 0}</p>
                                          <h1 className='text-base font-bold'>{t("dashSecOneBlgTwo")}</h1>
                                    </div>
                                    <div className='border border-blue-600 drop-shadow-sm rounded-sm p-4 text-white w-[200px] text-center flex flex-col'>
                                          <button
                                                className='btn_primary'
                                                aria-describedby={id}
                                                onClick={handleClick}
                                          >{t("dashSecOneBlgThreeLineOne")}</button>
                                          <button
                                                className='btn_primary bg-green-600 mt-4'
                                                onClick={handleReset}
                                          >{t("dashSecOneBlgThreeLineTwo")}</button>
                                    </div>
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
                                          <button className='btn_primary w-full' onClick={handleFilterDonation}>{t("dashSecOneBlgThreeLineBtn")}</button>
                                    </div>
                              </Popover>
                              <div className='p-4 mt-8'>
                                    <Progressbar
                                          donations={allDonations.length}
                                          pick={picked.length}
                                          close={closed.length}
                                    />
                              </div>
                              <div className='p-4 mt-8 w-fit grid grid-cols-1 md:grid-cols-3 mx-auto gap-4'>
                                    <DashboardCircle
                                          amount={inStock.length + outStock.length}
                                          title={t("dashSecThreeBlgOne")}
                                          bg="#0A5174"
                                    />
                                    <DashboardCircle
                                          amount={inStock.length}
                                          title={t("dashSecThreeBlgTwo")}
                                          bg="green"
                                    />
                                    <DashboardCircle
                                          amount={outStock.length}
                                          title={t("dashSecThreeBlgThree")}
                                          bg="orange"
                                    />
                              </div>
                              <div className='p-4 mt-8'>
                                    <DashboardChart
                                          labels={data.length === 0 ? ["pink"] : data[0].labels}
                                          data1={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[0].values}
                                          data2={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[1].values}
                                          data3={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[2].values}
                                          data4={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[3].values}
                                    />
                                    <div className="flex w-fit gap-4 mt-[50px] mx-auto">
                                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                      label={t("dashSecFourInputTitle")}
                                                      views={['year']}
                                                      value={chartYear}
                                                      onChange={(newValue) => {
                                                            setChartYear(newValue);
                                                      }}
                                                      renderInput={(params) => <TextField {...params} />}
                                                />
                                          </LocalizationProvider>
                                          <button onClick={handleChart} className="btn_primary">{t("dashSecFourBtn")}</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </AdminLayout>
      );
};

export async function getServerSideProps(context) {
      const { token } = parseCookies(context);

      if (!token) {
            const { res } = context;
            res.writeHead(302, { Location: "/admin" });
            res.end();
      }

      const don = await axios.get(`https://rhma.sa/api/donations`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const dri = await axios.get(`https://rhma.sa/api/drivers`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const adm = await axios.get(`https://rhma.sa/api/admin`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const war = await axios.get(`https://rhma.sa/api/warehouse`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      return {
            props: {
                  // donations: [],
                  // drivers: [],
                  // admins: [],
                  // warehouse: []
                  donations: don.data,
                  drivers: dri.data,
                  admins: adm.data,
                  warehouse: war.data,
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'dashboard',
                  ]))
            }
      }
}
export default Dashboard;