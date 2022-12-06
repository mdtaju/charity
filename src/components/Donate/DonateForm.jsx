import { Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { locations } from '../../config/locations';
import Input from '../Input';
import OptionInput from '../OptionInput';
import DonateAddForm from './DonateAddForm';

const DonateForm = () => {
      const [fullName, setFullName] = useState("");
      const [phone, setPhone] = useState("");
      const [productName, setProductName] = useState("");
      const [productCondition, setProductCondition] = useState("");
      const [city, setCity] = useState("");
      const [district, setDistrict] = useState("");
      const [address, setAddress] = useState("");
      const [region, setRegion] = useState("");
      const [latNum, setLatNum] = useState("");
      const [longNum, setLongNum] = useState("");
      const [trackStatus, setTrackStatus] = useState(0);
      const [allRegion, setAllRegion] = useState([]);
      const [allCity, setAllCity] = useState([]);
      const [allDistrict, setAllDistrict] = useState([]);
      const [snakeState, setSnakeState] = useState({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });
      useEffect(() => {
            setAllCity([]);
            setAllDistrict([]);
            const getAllRegion = locations.filter((item, i, arr) => i === arr.findIndex((t) => (t.regionEnglishName === item.regionEnglishName)));
            setAllRegion(getAllRegion);
            if (region) {
                  const getAllLocation = locations.filter((item) => item.regionEnglishName === region);
                  const getAllCity = getAllLocation.filter((item, i, arr) => i === arr.findIndex((t) => (t.cityEnglishName === item.cityEnglishName)));
                  setAllCity(getAllCity)
            }
            if (city) {
                  const getAllLocation = locations.filter((item) => item.cityEnglishName === city);
                  const getAllDistrict = getAllLocation.filter((item, i, arr) => i === arr.findIndex((t) => (t.districtEnglishName === item.districtEnglishName)));
                  setAllDistrict(getAllDistrict);
            }
      }, [region, city])

      const { vertical, horizontal, open, mss } = snakeState;
      const handleClose = () => {
            setSnakeState({ ...snakeState, open: false });
      };
      const handleFormSubmit = async (e) => {
            e.preventDefault();
            if (phone.length !== 9) {
                  setSnakeState({ ...snakeState, open: true, mss: 'Phone number should be 9 digits.' });
                  return;
            }
            const getDate = Date.now();
            const convertPhone = +phone;
            const track = Math.floor(Math.random() * (convertPhone - 9999) + 9999);
            const allData = {
                  fullName,
                  phone,
                  productName,
                  productCondition,
                  region,
                  city,
                  district,
                  address,
                  latNum,
                  longNum,
                  trackID: track,
                  trackStatus,
                  date: getDate
            }
            const res = await axios.post("/api/donations", allData);
            console.log(res);

            setFullName("");
            setPhone("");
            setProductName("");
            setAddress("");
            setLatNum("");
            setLongNum("");
            setProductCondition("");
            setCity("");
            setDistrict("");
            setRegion("");
      }
      return (
            <div className='gap'>
                  <div className="container mx-auto p-3 sm:px-4 md:px-8">
                        <div className='border border-[#0A5174] w-full md:w-[740px] mx-auto p-4 rounded-sm'>
                              <div className='text-center flex flex-col gap-2'>
                                    <h1 className='text-2xl font-semibold text-[#0A5175] -mb-2'>To be a Donor</h1>
                                    <p className='text-gray-500 italic'>Please fill the form below</p>
                                    <div className='w-1/2 h-[1px] bg-[#0A5174] mx-auto'></div>
                              </div>
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
                                                title='Full Name'
                                                type='text'
                                                lbl="Enter your name"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                          />
                                          <Input
                                                title='Phone'
                                                type='number'
                                                lbl='Enter your number'
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                          />
                                          {/* <Input title='Product type' type='text' lbl='Ex: T-shirt' required /> */}
                                          <Input
                                                title='Product name'
                                                type='text'
                                                lbl='Enter product name'
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                          />
                                          <OptionInput
                                                title='Product condition'
                                                lbl='Chose condition'
                                                state={productCondition}
                                                setState={setProductCondition}
                                                options={['New & unused', 'New & used', 'Old but unused', 'Old & used']}
                                          />
                                    </div>
                                    {/* <p className='font-semibold text-[#0A5174] mt-5'>Product image
                                          <span className='text-red-500 font-bold text-lg'>{"*"}</span>
                                    </p> */}
                                    {/* <Button
                                          className='mt-2'
                                          variant="contained"
                                          component="label"
                                    >
                                          Upload File
                                          <input
                                                type="file"
                                                hidden
                                          />
                                    </Button> */}
                                    {/* <div
                                          className='w-full p-4 mt-2 bg-[#e7e7e7] border-b border-[#0A5174] rounded-t-[3px]'
                                    >
                                          Upload File
                                          <input
                                                className='w-full h-full invisible'
                                                type="file"
                                          // hidden
                                          />
                                    </div> */}
                                    <h1 className='text-center text-[#0A5174] font-semibold text-lg mt-8'>Select your address carefully</h1>
                                    <p className='text-center italic text-gray-500'>Recommended is manually</p>
                                    <div className='w-full h-[1px] bg-[#0A5174] mt-2 mb-4'></div>

                                    {/* Donate Address form below */}
                                    <DonateAddForm
                                          city={city}
                                          setCity={setCity}
                                          district={district}
                                          setDistrict={setDistrict}
                                          region={region}
                                          setRegion={setRegion}
                                          address={address}
                                          setAddress={setAddress}
                                          allRegion={allRegion}
                                          allCity={allCity}
                                          allDistrict={allDistrict}
                                    />
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default DonateForm;