import { Snackbar } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import dayjs from 'dayjs';
import moment from 'moment/moment';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';
import { locations } from '../../config/locations';
import DateInput from '../DateInput';
import Input from '../Input';
import OptionInput from '../OptionInput';
import DonateAddForm from './DonateAddForm';
const DonateForm = ({ title, CBy, adminName }) => {
      const { t } = useTranslation("donate");
      const [dialogOpen, setDialogOpen] = useState({
            state: false,
            mess: "",
            track: ""
      });
      const router = useRouter();
      const [fullName, setFullName] = useState("");
      const [phone, setPhone] = useState("");
      const [productName, setProductName] = useState("");
      const [productCondition, setProductCondition] = useState("");
      const [city, setCity] = useState("");
      const [district, setDistrict] = useState("");
      const [address, setAddress] = useState("");
      const [allCity, setAllCity] = useState([]);
      const [allDistrict, setAllDistrict] = useState([]);
      const [selectPosition, setSelectPosition] = useState(null);
      const [addSwitch, setAddSwitch] = useState('By Maps');
      const date = moment.utc().utcOffset("GMT+03:00")._d;
      const [receiveDate, setReceiveDate] = useState(dayjs(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`));
      const [snakeState, setSnakeState] = useState({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });
      useEffect(() => {
            setAllCity([]);
            setAllDistrict([]);
            setDistrict("")
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
      }, [city, router, receiveDate])
      const { vertical, horizontal, open, mss } = snakeState;
      const handleClose = () => {
            setSnakeState({ ...snakeState, open: false });
      };

      const handleDialogClose = () => {
            setDialogOpen({
                  state: false,
                  mess: "",
                  track: ""
            });
      };
      const handleFormSubmit = async (e) => {
            e.preventDefault();
            const phoneToString = phone.toString();
            if (addSwitch === "Manually") {
                  if (!city || !district) {
                        setCity("");
                        setDistrict("");
                        return alert("Please select city and district again.")
                  }
            } else {
                  if (!selectPosition) {
                        setSnakeState({ ...snakeState, open: true, mss: "Please pick a map location." })
                        return
                  }
            }
            if (phoneToString.length !== 12 || phoneToString[0] !== '9' || phoneToString[1] !== '6' || phoneToString[2] !== '6' || phoneToString[3] !== '5') {
                  setSnakeState({ ...snakeState, open: true, mss: t("phoneValidationMsg") });
                  return;
            }
            const getDate = Date.now();

            const phoneShort = phone.slice(5, 9);
            const convertNumber = +phoneShort;
            const totalTrack = getDate + convertNumber;
            const track = "8" + totalTrack;
            const formateDate = new Date(`${receiveDate.$M + 1}-${receiveDate.$D}-${receiveDate.$y}`);
            const zone = moment(formateDate).format('DD/MM/YYYY h:mm A');
            const today = moment.utc().utcOffset("GMT+03:00").format('DD/MM/YYYY h:mm A');
            console.log(today)
            let allData;
            if (addSwitch === "Manually") {
                  allData = {
                        fullName,
                        phone,
                        productDescription: productName,
                        productCondition,
                        city,
                        district,
                        address,
                        latNum: "",
                        longNum: "",
                        id: track,
                        trackStatus: 0,
                        receiveDate: zone,
                        date: today,
                        createdBy: CBy,
                  }
            } else {
                  allData = {
                        fullName,
                        phone,
                        productDescription: productName,
                        productCondition,
                        city: selectPosition.address.city,
                        district: "",
                        address: selectPosition.display_name,
                        latNum: selectPosition.lat,
                        longNum: selectPosition.lon,
                        id: track,
                        trackStatus: 0,
                        receiveDate: zone,
                        date: today,
                        createdBy: CBy,
                  }
            }
            try {
                  await axios.all([
                        axios.post("/api/donations", allData),
                        axios.post("/api/tracking-history", {
                              id: track,
                              date: date.toUTCString(),
                              status: "Order Creation",
                              description: "Order Created",
                              operation: CBy,
                              phone: phone
                        })
                  ])
                  // const res = await ;
                  // const response = await 
                  setDialogOpen({
                        state: true,
                        mess: t("trackDialogSccMsg"),
                        track: track
                  })
                  setProductName("");
                  setProductCondition("");
                  setAllCity([]);
                  setAllDistrict([]);
            } catch (error) {
                  console.log(error)
                  setDialogOpen({
                        state: true,
                        mess: t("trackDialogErrMsg"),
                        track: ""
                  })
            }
      }
      return (
            <div className='gap'>
                  <div className="container mx-auto p-3 sm:px-4 md:px-8">
                        <div className='border border-[#0A5174] w-full md:w-[740px] mx-auto p-4 rounded-sm'>
                              <div className='text-center flex flex-col gap-2'>
                                    <h1 className='text-2xl font-semibold text-[#0A5175] -mb-2'>{title}</h1>
                                    <p className='text-gray-500 italic'>{t("donateFormSubTitle")}</p>
                                    <div className='w-1/2 h-[1px] bg-[#0A5174] mx-auto'></div>
                              </div>
                              <Dialog
                                    onClose={handleDialogClose}
                                    open={dialogOpen.state}>
                                    <div className='p-6'>
                                          {
                                                dialogOpen.track ?
                                                      <>
                                                            <div className='flex gap-2 items-center text-lg font-bold'>
                                                                  <TiTickOutline className='text-green-600' />
                                                                  <h1>{dialogOpen.mess}</h1>
                                                            </div>
                                                            <p className='text-center text-sm font-semibold mt-4'>{t("trackIdMcg")} : {dialogOpen.track}</p>
                                                            <div className='flex items-center gap-2 mt-4 w-fit mx-auto'>

                                                                  <p className='text-center text-sm font-semibold'>{t("trackLinkMcg")} - </p>
                                                                  <Link href={'/track'}>
                                                                        <button className='text-xs font-semibold bg-[#0A5174] px-3 py-1 text-white rounded-sm'>{t("dialogLinkBtn")}</button>
                                                                  </Link>
                                                            </div>
                                                            <button onClick={() => setDialogOpen({ state: false, mess: "", track: '' })} className='float-right btn_primary bg-red-500 mt-6'>{t("dialogCloseBtn")}</button>
                                                      </>
                                                      :
                                                      <>
                                                            <div className='flex gap-2 items-center text-lg font-bold'>
                                                                  <AiOutlineCloseCircle className='text-red-600' />
                                                                  <h1>{dialogOpen.mess}</h1>
                                                            </div>
                                                            <button onClick={() => setDialogOpen({ state: false, mess: "", track: '' })} className='float-right btn_primary bg-red-500 mt-6'>{t("dialogCloseBtn")}</button>
                                                      </>
                                          }

                                    </div>
                              </Dialog>
                              <Snackbar
                                    anchorOrigin={{ vertical, horizontal }}
                                    open={open}
                                    onClose={handleClose}
                                    message={mss}
                                    key={vertical + horizontal}
                              />
                              <form onSubmit={handleFormSubmit}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                                          <Input
                                                title={t("inputNameTitle")}
                                                type='text'
                                                lbl={t("inputNameLabel")}
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                          />
                                          <Input
                                                title={t("inputPhoneTitle")}
                                                type='number'
                                                lbl={t("inputPhoneLabel")}
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                          />
                                          {/* <Input title='Product type' type='text' lbl='Ex: T-shirt' required /> */}
                                          <OptionInput
                                                title={t("inputPDConditionTitle")}
                                                lbl={t("inputPDConditionLabel")}
                                                state={productCondition}
                                                setState={setProductCondition}
                                                options={[t("inputPDConditionTwo"), t("inputPDConditionThree")]}
                                          />
                                          <Input
                                                title={t("inputPDDesTitle")}
                                                type='text'
                                                lbl={t("inputPDDesLabel")}
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                          />
                                          <DateInput
                                                title={t("inputDateTitle")}
                                                lbl={t("inputDateLabel")}
                                                state={receiveDate}
                                                setState={setReceiveDate}
                                          />
                                          <div className='p-3 border border-[#0a5174] rounded-md'>
                                                <p className='text-red-600 text-sm font-bold text-justify'>{t("pickWarningMess")}</p>
                                          </div>
                                    </div>

                                    <h1 className='text-center text-[#0A5174] font-semibold text-lg mt-8'>{t("addFormTitle")}</h1>
                                    <p className='text-center italic text-gray-500'>{t("addFormSubTitle")}</p>
                                    <div className='w-full h-[1px] bg-[#0A5174] mt-2 mb-4'></div>

                                    {/* Donate Address form below */}
                                    <DonateAddForm
                                          city={city}
                                          setCity={setCity}
                                          district={district}
                                          setDistrict={setDistrict}
                                          address={address}
                                          setAddress={setAddress}
                                          allCity={allCity}
                                          allDistrict={allDistrict}
                                          selectPosition={selectPosition}
                                          setSelectPosition={setSelectPosition}
                                          addSwitch={addSwitch}
                                          setAddSwitch={setAddSwitch}
                                    />
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default DonateForm;