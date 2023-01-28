import { Dialog, Popover, Snackbar } from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import moment from 'moment/moment';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineSetting } from 'react-icons/ai';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import AllDonationEdit from '../../../src/components/Admin/AllDonationEdit';
import BulkSearch from '../../../src/components/Admin/BulkSearch';
import DateRangeFilter from '../../../src/components/Admin/DateRangeFilter';
import DateInput from '../../../src/components/DateInput';
import DonationsTable from '../../../src/components/Donate/DonationsTable';
import Input from '../../../src/components/Input';
import OptionInput from '../../../src/components/OptionInput';
import { locations } from '../../../src/config/locations';
import { UseRole } from '../../../src/hoke/useRole';
const Donations = ({ donations, getDrivers, donImages }) => {
      const { t } = useTranslation("all_donations");
      const useRole = UseRole();
      const router = useRouter();
      const { name } = parseCookies();
      const [dateRange, setDateRange] = useState([
            {
                  startDate: moment.utc().utcOffset("GMT+03:00")._d,
                  endDate: moment.utc().utcOffset("GMT+03:00")._d,
                  key: 'selection'
            }
      ]);
      const [allDonations, setAllDonations] = useState([]);
      const [selectionModel, setSelectionModel] = useState([]);
      const [drivers, setDrivers] = useState([]);
      const [dialogOpen, setDialogOpen] = useState(false);
      const [imageOpen, setImageOpen] = useState(false);
      const [unAssignOpen, setUnAssignOpen] = useState(false);
      const [editOpen, setEditOpen] = useState(false);
      const [imageLinks, setImageLinks] = useState([]);
      const [selectDriver, setSelectDriver] = useState("");
      const [anchorEl, setAnchorEl] = useState(null);
      const [assignMss, setAssignMss] = useState("");
      const [wayBillGenerate, setWaybillGenerate] = useState([]);
      const [wayBillOpen, setWayBillOpen] = useState(false);
      const [allCity, setAllCity] = useState([]);
      const [allDistrict, setAllDistrict] = useState([]);
      const [city, setCity] = useState("");
      const [district, setDistrict] = useState("");
      const [address, setAddress] = useState("");
      const [phone, setPhone] = useState("");
      const [showAssign, setShowAssign] = useState(false);
      const [showUnAssign, setShowUnAssign] = useState(false);
      const [showReceived, setShowReceived] = useState(false);
      const [showUnReceived, setShowUnReceived] = useState(false);
      const [values, setValues] = useState([]);
      const [editInput, setEditInput] = useState({
            id: "",
            phone: "",
            city: "",
            district: "",
            address: ""
      })
      const ScheduleDate = moment.utc().utcOffset("GMT+03:00")._d;
      const [reScheduleDate, setReScheduleDate] = useState(dayjs(`${ScheduleDate.getFullYear()}-${ScheduleDate.getMonth() + 1}-${ScheduleDate.getDate()}`));
      const [pickedStatus, setPickedStatus] = useState("");
      const [snakeState, setSnakeState] = useState({
            openMss: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });

      const { vertical, horizontal, openMss, mss } = snakeState;
      const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
            setAnchorEl(null);
            setSnakeState({ ...snakeState, openMss: false, mss: "" });
      };
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
      useEffect(() => {
            const driversName = [];
            for (let i = 0; i < getDrivers.length; i++) {
                  const element = getDrivers[i];
                  driversName.push(element.name + ": " + element.phone);
            }
            setDrivers(driversName);
            setAllDonations(donations);
            const getSelectedDonations = donations.filter((item) => {
                  return selectionModel.indexOf(item.id) > -1
            })
            setWaybillGenerate(getSelectedDonations);

            if (getSelectedDonations.length !== 0) {
                  const { id, phone } = getSelectedDonations[0];
                  setEditInput({
                        id,
                        phone: getSelectedDonations[0].phone,
                        city: getSelectedDonations[0].city,
                        district: getSelectedDonations[0].district,
                        address: getSelectedDonations[0].address,
                  });

                  console.log("called")
            }

            const getAssigns = getSelectedDonations.filter((item) => item.trackStatus === 0);
            const getUnAssigns = getSelectedDonations.filter((item) => item.trackStatus === 1);
            const getReceive = getSelectedDonations.filter((item) => item.trackStatus === 2);
            const getUnReceive = getSelectedDonations.filter((item) => item.trackStatus === 3);
            if (getAssigns.length === selectionModel.length) {
                  setShowAssign(true);
                  setShowUnAssign(false);
                  setShowReceived(false);
                  setShowUnReceived(false);
            }
            if (getUnAssigns.length === selectionModel.length) {
                  setShowAssign(false);
                  setShowUnAssign(true);
                  setShowReceived(false);
                  setShowUnReceived(false);
            }
            if (getReceive.length === selectionModel.length) {
                  setShowAssign(false);
                  setShowUnAssign(false);
                  setShowReceived(true);
                  setShowUnReceived(false);
            }
            if (getUnReceive.length === selectionModel.length) {
                  setShowAssign(false);
                  setShowUnAssign(false);
                  setShowReceived(false);
                  setShowUnReceived(true);
            }

            setAllCity([]);
            setAllDistrict([]);
            // setDistrict("")
            if (router.locale === 'en') {
                  const getAllCity = locations.filter((item, i, arr) => i === arr.findIndex((t) => (t.cityEnglishName === item.cityEnglishName)));
                  setAllCity(getAllCity);

                  if (city) {
                        const getAllLocation = locations.filter((item) => item.cityEnglishName === city);
                        const getAllDistrict = getAllLocation.filter((item, i, arr) => i === arr.findIndex((t) => (t.districtEnglishName === item.districtEnglishName)));
                        setAllDistrict(getAllDistrict);
                  }
            } else {
                  const getAllCity = locations.filter((item, i, arr) => i === arr.findIndex((t) => (t.cityArabicName === item.cityArabicName)));
                  setAllCity(getAllCity);

                  if (city) {
                        const getAllLocation = locations.filter((item) => item.cityArabicName === city);
                        const getAllDistrict = getAllLocation.filter((item, i, arr) => i === arr.findIndex((t) => (t.districtArabicName === item.districtArabicName)));
                        setAllDistrict(getAllDistrict);
                  }
            }

      }, [getDrivers, donations, selectionModel, city, router.locale, district, address]);
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
      const handleFilterDonation = () => {
            getDateFilter(donations, setAllDonations);
      }
      const handleReset = () => {
            if (donations) {
                  setAllDonations(donations)
            }
      }
      const handleReceived = () => {
            const today = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            selectionModel.map(async (item, i) => {
                  const getDonation = donations.find((i) => i.id === item)
                  try {
                        await axios.all([
                              axios.post("/api/admin/warehouse", {
                                    id: item,
                                    date: today,
                                    received: "received",
                                    trackStatus: 3,
                                    receivedBy: name
                              }),
                              axios.post("/api/tracking-history", {
                                    id: item,
                                    date: today,
                                    status: "Received",
                                    description: "Received in warehouse",
                                    operation: name,
                                    phone: getDonation.phone
                              })
                        ])
                        setSnakeState({ ...snakeState, openMss: true, mss: t("allDonDlgRcvSccMss") });
                        router.replace(router.asPath)
                  } catch (error) {
                        setSnakeState({ ...snakeState, openMss: true, mss: t("allDonDlgErrMss") });
                  }
            })
      }
      const handleUnReceived = () => {
            const today = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            selectionModel.map(async (item, i) => {
                  const getDonation = donations.find((i) => i.id === item)
                  try {
                        await axios.all([
                              axios.post("/api/admin/warehouse", {
                                    id: item,
                                    date: '',
                                    received: "unreceived",
                                    trackStatus: 2,
                                    receivedBy: ""
                              }),
                              axios.post("/api/tracking-history", {
                                    id: item,
                                    date: today,
                                    status: "Unreceived",
                                    description: "Not received in warehouse",
                                    operation: name,
                                    phone: getDonation.phone
                              })
                        ])
                        setSnakeState({ ...snakeState, openMss: true, mss: `Successfully set unreceived.` });
                        router.replace(router.asPath)
                  } catch (error) {
                        setSnakeState({ ...snakeState, openMss: true, mss: `Something went wrong. Please try again` });
                  }
            })
      }
      const handleSubmit = (e) => {
            e.preventDefault();
            const combineString = selectDriver.split(":");
            const getName = combineString[0];
            const getPhone = combineString[1];
            const removeSpace = getPhone.substr(1);
            const date = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            selectionModel.map(async (item) => {
                  const getDonation = donations.find((i) => i.id === item)
                  try {
                        await axios.all([
                              axios.post("/api/donations/assign-donation", {
                                    id: item,
                                    name: getName,
                                    phone: removeSpace,
                                    assignBy: name,
                                    pickedStatus: "assigned"
                              }),
                              axios.post("/api/tracking-history", {
                                    id: item,
                                    date: date,
                                    status: "Assigned",
                                    description: `Assigned to ${getName}`,
                                    operation: name,
                                    phone: getDonation.phone
                              })
                        ])
                        // .then(axios.spread((data1, data2) => {
                        //       // output of req.
                        //       console.log('data1', data1, 'data2', data2)
                        //     }));
                        setAssignMss(`${t("allDonDlgAssSccMss")} ${getName} : ${removeSpace}`)
                        setTimeout(() => { setDialogOpen(false); setAssignMss("") }, 2000)
                        router.replace(router.asPath)
                  } catch (error) {
                        setAssignMss(t("allDonDlgErrMss"));
                  }
            })
      }
      const handleUnAssign = () => {
            const date = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            selectionModel.map(async (item) => {
                  const getDonation = donations.find((i) => i.id === item)
                  try {
                        await axios.all([
                              axios.post("/api/donations/unassign-donation", {
                                    id: item,
                                    name: "",
                                    phone: "",
                                    pickedStatus: "unassigned"
                              }),
                              axios.post("/api/tracking-history", {
                                    id: item,
                                    date: date,
                                    status: "Unassigned",
                                    description: "",
                                    operation: name,
                                    phone: getDonation.phone
                              })
                        ])
                        setAssignMss(t("allDonDlgUnAssSccMss"))
                        setTimeout(() => { setUnAssignOpen(false); setAssignMss("") }, 2000)
                        router.replace(router.asPath)
                  } catch (error) {
                        setAssignMss(t("allDonDlgErrMss"));
                  }
            })
      }
      const handleImage = () => {
            let links = [];
            const filterDonation = donImages.filter((item) => item.track_id === selectionModel[0]);

            filterDonation.map((item) => {
                  links.push(item.image_name)
            })
            setImageLinks(links);
      }
      const handlePickedStatus = (e) => {
            e.preventDefault();
            const date = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            selectionModel.map(async (item) => {

                  const formateDate = new Date(`${reScheduleDate.$M + 1}-${reScheduleDate.$D}-${reScheduleDate.$y}`);
                  const serverDate = moment(formateDate).format('DD/MM/YYYY h:mm A');
                  const getDonation = donations.find((i) => i.id === item)
                  try {
                        if (pickedStatus === "Picked") {
                              await axios.all([
                                    axios.post("/api/donations/picked-status", {
                                          id: item,
                                          status: pickedStatus,
                                          name: name,
                                          scheduleDate: serverDate
                                    }),
                                    axios.post("/api/tracking-history", {
                                          id: item,
                                          date: date,
                                          status: "Picked",
                                          description: `Donation picked by ${getDonation.driverName}`,
                                          operation: name,
                                          phone: getDonation.phone
                                    })
                              ])
                        } else if (pickedStatus === "Closed") {
                              await axios.all([
                                    axios.post("/api/donations/picked-status", {
                                          id: item,
                                          status: pickedStatus,
                                          name: name,
                                          scheduleDate: serverDate
                                    }),
                                    axios.post("/api/tracking-history", {
                                          id: item,
                                          date: date,
                                          status: "Closed",
                                          description: `Donation Closed`,
                                          operation: name,
                                          phone: getDonation.phone
                                    })
                              ])
                        } else if (pickedStatus === "Re-Schedule") {
                              await axios.all([
                                    axios.post("/api/donations/picked-status", {
                                          id: item,
                                          status: pickedStatus,
                                          name: name,
                                          scheduleDate: serverDate
                                    }),
                                    axios.post("/api/tracking-history", {
                                          id: item,
                                          date: date,
                                          status: "Status Updated",
                                          description: `Re-Schedule to ${serverDate}`,
                                          operation: name,
                                          phone: getDonation.phone
                                    })
                              ])
                        } else {
                              await axios.all([
                                    axios.post("/api/donations/picked-status", {
                                          id: item,
                                          status: pickedStatus,
                                          name: name,
                                          scheduleDate: serverDate
                                    }),
                                    axios.post("/api/tracking-history", {
                                          id: item,
                                          date: date,
                                          status: "Status Updated",
                                          description: pickedStatus,
                                          operation: name,
                                          phone: getDonation.phone
                                    })
                              ])
                        }
                        setSnakeState({ ...snakeState, openMss: true, mss: `${t("allDonDlgStsSccMss")} ${pickedStatus}.` });
                        router.replace(router.asPath)
                  } catch (error) {
                        console.log(error)
                        setSnakeState({ ...snakeState, openMss: true, mss: `${t("allDonDlgErrMss")} ${pickedStatus}.` });
                  }
            })
      }
      const handleEditChange = ({ target: { name, value } }) => {
            setEditInput({ ...editOpen, [name]: value })
      }
      const handleEditSubmit = async (e) => {
            e.preventDefault();
            try {
                  const uPhone = phone ? phone : editInput.phone;
                  const uCity = city ? city : editInput.city;
                  const uDistrict = district ? district : editInput.district;
                  const uAddress = address ? address : editInput.address;
                  const allData = {
                        id: editInput.id,
                        city: uCity,
                        district: uDistrict,
                        address: uAddress,
                        phone: uPhone,
                  }
                  await axios.post("/api/donations-edit", allData);
                  setEditInput({
                        id: "",
                        phone: "",
                        city: "",
                        district: "",
                        address: "",
                  })
                  setAssignMss(`${t("allDonDlgUpdateSccMss")} ${selectionModel[0]}`)
                  setTimeout(() => { setEditOpen(false); setAssignMss(""); }, 2000)
                  router.replace(router.asPath)
            } catch (error) {
                  setSnakeState({ open: true, mss: t("allDonDlgErrMss") })
            }
      }
      const bulkSearchHandler = () => {
            const result = donations.filter((item) => {
                  return values.indexOf(item.id) > -1;
            })
            setAllDonations(result);
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="px-4 md:px-6">
                              <div className='flex items-center justify-between'>
                                    <Snackbar
                                          anchorOrigin={{ vertical, horizontal }}
                                          open={openMss}
                                          onClose={handleClose}
                                          message={mss}
                                          key={vertical + horizontal}
                                    />
                                    <div>
                                          <h1 className='text-2xl font-bold text-[#0A5174] mb-2'>{t("allDonMainTitle")}</h1>
                                          <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                                    </div>
                                    <div className='flex gap-4'>
                                          <button
                                                className='btn_primary'
                                                aria-describedby={id}
                                                onClick={handleClick}
                                          >{t("allDonDateFilter")}</button>
                                          <button
                                                className='btn_primary bg-green-600'
                                                onClick={handleReset}
                                          >{t("allDonReset")}</button>
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
                                                <button className='btn_primary w-full' onClick={handleFilterDonation}>{t("allDonDateFilterFilter")}</button>
                                          </div>
                                    </Popover>
                              </div>
                              {
                                    (selectionModel.length !== 0 && useRole !== "Default") &&
                                    <div className='p-4 border border-[#0a5174] w-fit rounded-md my-4 mx-auto relative'>
                                          <div className='absolute w-[40px] h-[40px] rounded-full bg-[#0a5174] grid place-items-center top-[-20px] left-[50%]'>
                                                <AiOutlineSetting className='text-2xl text-white' />
                                          </div>
                                          <form onSubmit={handlePickedStatus} className='flex flex-col md:flex-row gap-4 items-center md:items-end w-[250px] md:w-[500px] my-4 pb-4 border-b border-[#0a5174]'>
                                                <div className='w-[250px]'>
                                                      <OptionInput
                                                            title={t("allDonStatusInputTitle")}
                                                            lbl={t("allDonStatusInputLbl")}
                                                            options={['Picked', 'Re-Schedule', 'Uncontactable-No Answer/Switched off', "Doesn't Want to Give Reason", "Did Not Order", "Wrong Contact Number", "Closed"]}
                                                            state={pickedStatus}
                                                            setState={setPickedStatus}
                                                      />
                                                </div>
                                                {
                                                      pickedStatus === "Re-Schedule" &&

                                                      <DateInput
                                                            required
                                                            title={t("allDonReScheduleInputTitle")}
                                                            lbl={t("allDonReScheduleInputLbl")}
                                                            state={reScheduleDate}
                                                            setState={setReScheduleDate}
                                                      />
                                                }
                                                <button type='submit' className='btn_primary whitespace-nowrap'>{t("allDonStatusBtn")}</button>
                                          </form>
                                          <div className='grid grid-cols-2 md:grid-cols-6 gap-4 w-[300px] md:w-[700px]'>
                                                {
                                                      showAssign &&
                                                      <button onClick={() => setDialogOpen(!dialogOpen)} className='btn_primary'>{t("allDonAssBtn")}</button>
                                                }
                                                {
                                                      showUnAssign &&
                                                      <button onClick={() => setUnAssignOpen(!unAssignOpen)} className='btn_primary '>{t("allDonUnAssBtn")}</button>
                                                }
                                                {
                                                      showReceived &&
                                                      <button onClick={handleReceived} className='btn_primary '>{t("allDonRcvBtn")}</button>
                                                }
                                                {
                                                      showUnReceived &&
                                                      <button onClick={handleUnReceived} className='btn_primary '>{t("allDonUnRcvBtn")}</button>
                                                }

                                                {/* <button onClick={() => setWayBillOpen(true)} className='btn_primary '>Waybill</button> */}
                                                <button onClick={() => setEditOpen(true)} className='btn_primary '>{t("allDonEdtBtn")}</button>
                                                <button onClick={() => { setImageOpen(true); handleImage() }} className='btn_primary '>{t("allDonImgBtn")}</button>
                                          </div>

                                    </div>
                              }
                              {/* <Dialog open={wayBillOpen} onClose={() => setWayBillOpen(false)}>
                                    <div className='p-4 sm:p-6 min-w-[250px]'>
                                          <div className='w-full mb-4 text-right'>
                                                <button onClick={() => setWayBillOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                          </div>
                                          <div className="w-[320px] h-[600px] sm:w-[540px] my-4">
                                                <PDFViewer style={{ width: "100%", height: "100%" }}>
                                                      <Document>
                                                            <Page wrap={true} size={["384", "576"]}>
                                                                  {
                                                                        wayBillGenerate.map((item, i) => (
                                                                              <Waybill info={item} key={i} />
                                                                        ))
                                                                  }

                                                            </Page>
                                                      </Document>
                                                </PDFViewer>
                                          </div>
                                    </div>
                              </Dialog> */}

                              <Dialog open={imageOpen} onClose={() => setImageOpen(false)}>
                                    <div className='p-4 sm:p-6 min-w-[250px]'>
                                          <div className='w-full mb-4 text-right'>
                                                <button onClick={() => setImageOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                          </div>
                                          <div className="w-full sm:w-[540px] my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {
                                                      imageLinks &&
                                                      imageLinks.map((item, i) => (
                                                            <div key={i} className="w-full max-h-[350px] border border-[#0a5174] p-3">
                                                                  <Image
                                                                        width={300}
                                                                        height={300}
                                                                        src={item}
                                                                        className='w-full h-full object-contain'
                                                                        alt="donation-image"
                                                                  />
                                                            </div>
                                                      ))
                                                }
                                          </div>
                                    </div>
                              </Dialog>

                              <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                                    <div className='p-4 sm:p-6 min-w-[250px]'>
                                          <div className='w-full mb-4 text-right'>
                                                <button onClick={() => setDialogOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                          </div>
                                          {
                                                <div className='mb-6'>
                                                      {
                                                            selectionModel.map((item, i) => (
                                                                  <p className='text-sm text-gray-600 font-bold' key={i}>{t("allDonAssDlgIDTitle")}: {item}</p>
                                                            ))
                                                      }
                                                      <p className='text-[#0A5174] text-lg mt-2 font-bold text-center'>{assignMss}</p>
                                                </div>
                                          }
                                          <form onSubmit={handleSubmit}>
                                                <OptionInput
                                                      title={t("allDonAssDlgInputTitle")}
                                                      lbl={t("allDonAssDlgInputLbl")}
                                                      options={drivers}
                                                      state={selectDriver}
                                                      setState={setSelectDriver}
                                                />
                                                <button className='btn_primary w-full mt-4'>{t("allDonAssDlgInputBtn")}</button>
                                          </form>
                                    </div>
                              </Dialog>
                              <Dialog open={unAssignOpen} onClose={() => setUnAssignOpen(false)}>
                                    <div className='p-4 sm:p-6 min-w-[250px]'>
                                          <div className='w-full mb-4 text-right'>
                                                <button onClick={() => setUnAssignOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                          </div>
                                          {
                                                <div className='mb-6'>
                                                      {
                                                            selectionModel.map((item, i) => (
                                                                  <p className='text-sm text-gray-600 font-bold' key={i}>{t("allDonAssDlgIDTitle")}: {item}</p>
                                                            ))
                                                      }
                                                      <p className='text-[#0A5174] text-lg mt-2 font-bold text-center'>{assignMss}</p>
                                                </div>
                                          }

                                          <button onClick={handleUnAssign} className='btn_primary w-full mt-4 bg-red-600'>{t("allDonUnAssDlgBtn")}</button>
                                    </div>
                              </Dialog>

                              <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
                                    <div className='p-4 sm:p-6 min-w-[350px]'>
                                          <div className='w-full mb-4 text-right'>
                                                <button onClick={() => setEditOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                                          </div>

                                          <h1 className='text-[#0a5174] text-lg font-bold mb-2'>{t("allDonEdtDlgTitle")}</h1>
                                          <div className='w-1/2 h-[1px] bg-[#0A5174] mb-6'></div>
                                          <form onSubmit={handleEditSubmit}>
                                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                                                      <Input
                                                            disabled
                                                            title={t("allDonEdtInputOneTitle")}
                                                            // lbl={t("allDonEdtInputOneLbl")}
                                                            type="number"
                                                            name="id"
                                                            value={editInput.id}
                                                      />
                                                      <Input
                                                            title={t("allDonEdtInputTwoTitle")}
                                                            lbl={t("allDonEdtInputTwoLbl")}
                                                            type="number"
                                                            name="phone"
                                                            value={phone}
                                                            required={false}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                      />
                                                      <AllDonationEdit
                                                            city={city}
                                                            setCity={setCity}
                                                            district={district}
                                                            setDistrict={setDistrict}
                                                            address={address}
                                                            setAddress={setAddress}
                                                            allCity={allCity}
                                                            allDistrict={allDistrict}
                                                      />
                                                </div>
                                                <p className='mb-4 text-center font-bold'>{assignMss}</p>
                                                <button className='btn_primary w-full'>{t("allDonEdtInputBtn")}</button>
                                          </form>

                                    </div>
                              </Dialog>
                              <BulkSearch
                                    values={values}
                                    setValues={setValues}
                                    searchHandler={bulkSearchHandler}
                              />
                              <DonationsTable
                                    rows={allDonations}
                                    columns={[
                                          { field: 'id', minWidth: 150, headerName: t("allDonTableHeaderOne") },
                                          { field: 'fullName', minWidth: 150, headerName: t("allDonTableHeaderTwo") },
                                          { field: 'phone', minWidth: 150, headerName: t("allDonTableHeaderThree") },
                                          { field: 'city', minWidth: 150, headerName: t("allDonTableHeaderFour") },
                                          { field: 'district', minWidth: 150, headerName: t("allDonTableHeaderFive") },
                                          { field: 'address', minWidth: 150, headerName: t("allDonTableHeaderSix") },
                                          { field: 'date', minWidth: 150, headerName: t("allDonTableHeaderSeven") },
                                          { field: 'productCondition', minWidth: 150, headerName: t("allDonTableHeaderEight") },
                                          { field: 'productDescription', minWidth: 150, headerName: t("allDonTableHeaderNine") },
                                          { field: 'clientDate', minWidth: 180, headerName: t("allDonTableHeaderTen") },
                                          { field: 'createdBy', minWidth: 150, headerName: t("allDonTableHeaderEleven") },
                                          { field: 'picked', minWidth: 150, headerName: t("allDonTableHeaderTwelve") },
                                          { field: 'subStatus', minWidth: 150, headerName: t("allDonTableHeaderThirteen") },
                                          { field: 'reScheduleDate', minWidth: 150, headerName: t("allDonTableHeaderFourteen") },
                                          {
                                                field: "lastStatusUpdateBy", minWidth: 180, headerName: t("allDonTableHeaderFifteen")
                                          },
                                          {
                                                field: "lastStatusUpdateDate", minWidth: 180, headerName: t("allDonTableHeaderSixTeen")
                                          },
                                          { field: 'driverName', minWidth: 150, headerName: t("allDonTableHeaderSevenTeen") },
                                          { field: 'driverPhone', minWidth: 180, headerName: t("allDonTableHeaderEightTeen") },
                                          { field: 'firstAssignedTime', minWidth: 150, headerName: t("allDonTableHeaderNineTeen") },
                                          { field: 'assignedBy', minWidth: 150, headerName: t("allDonTableHeaderTwenty") },
                                          { field: 'ofp', minWidth: 150, headerName: t("allDonTableHeaderTwentyOne") },

                                    ]}
                                    checkboxSelection={true}
                                    onSelectionModelChange={(newSelectionModel) => {
                                          setSelectionModel(newSelectionModel);
                                    }}
                                    getRowHeight={() => 'auto'}
                                    selectionModel={selectionModel}
                                    disableSelectionOnClick
                              // rowsPerPageOptions={10}
                              />
                        </div>
                  </div>
            </AdminLayout>
      );
};

export async function getServerSideProps(context) {
      const { token } = parseCookies(context);
      const { res } = context;

      if (!token) {
            res.writeHead(302, { Location: "/admin" });
            res.end();
      }
      const response = await axios.get(`https://rhma.sa/api/donations`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const resDrivers = await axios.get(`https://rhma.sa/api/drivers`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const donImages = await axios.get(`https://rhma.sa/api/donation-images`, {
            headers: {
                  'Accept-Encoding': 'application/json',
            }
      });
      const revData = response.data.reverse();
      return {
            props: {
                  donations: revData,
                  getDrivers: resDrivers.data,
                  donImages: donImages.data,
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'all_donations',
                  ]))
            }
      }
}

export default Donations;