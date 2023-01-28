import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AutoOptionInput from '../AutoOptionInput';
// import CharityGoogleMap from '../CharityGoogleMap';
import OpenMap from '../GoogleMap/OpenMap';
import Input from '../Input';

const DonateAddForm = ({
      city,
      setCity,
      district,
      setDistrict,
      address,
      setAddress,
      allRegion,
      allCity,
      allDistrict,
      selectPosition,
      setSelectPosition,
      addSwitch,
      setAddSwitch
}) => {
      const { t } = useTranslation("donate");
      const [locationCity, setLocationCity] = useState([]);
      const [locationDistrict, setLocationDistrict] = useState([]);
      const router = useRouter();
      // const [selectPosition, setSelectPosition] = useState(null);
      useEffect(() => {
            let city = [];
            let district = [];
            if (router.locale === "en") {
                  for (let i = 0; i < allCity.length; i++) {
                        const element = allCity[i];
                        city.push(element.cityEnglishName);
                  }
                  for (let i = 0; i < allDistrict.length; i++) {
                        const element = allDistrict[i];
                        district.push(element.districtEnglishName);
                  }
            } else {
                  for (let i = 0; i < allCity.length; i++) {
                        const element = allCity[i];
                        city.push(element.cityArabicName);
                  }
                  for (let i = 0; i < allDistrict.length; i++) {
                        const element = allDistrict[i];
                        district.push(element.districtArabicName);
                  }
            }
            setLocationCity(city)
            setLocationDistrict(district)
      }, [allRegion, allCity, allDistrict, router])
      const handleChange = (event) => {
            setAddSwitch(event.target.value);
      };
      return (
            <>
                  <FormControl>
                        <RadioGroup
                              row
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={addSwitch}
                              onChange={handleChange}
                        >
                              <FormControlLabel
                                    control={<Radio />}
                                    label={t("donateAddFormMap")}
                                    value="By Maps"
                              />
                              <FormControlLabel value="Manually" control={<Radio />} label={t("donateAddFormManually")} />

                        </RadioGroup>
                  </FormControl>
                  {
                        addSwitch === 'Manually' ?
                              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                                    <AutoOptionInput
                                          title={t("donateAddInputCity")}
                                          locations={locationCity}
                                          lbl={t("donationAddInputCityLbl")}
                                          state={city}
                                          setState={setCity}
                                    />
                                    <AutoOptionInput
                                          title={t("donateAddInputDistrict")}
                                          lbl={t("donationAddInputDistrictLbl")}
                                          locations={locationDistrict}
                                          state={district}
                                          setState={setDistrict}
                                    />
                                    {/* <OptionInput
                                          title="District"
                                          lbl="Chose your district"
                                          state={district}
                                          setState={setDistrict}
                                          options={locationDistrict}
                                    /> */}
                                    <Input
                                          value={address}
                                          onChange={(e) => setAddress(e.target.value)}
                                          title={t("donateAddInputAddTitle")}
                                          type='text'
                                          lbl={t("donateAddInputAddLabel")}
                                          required
                                    />
                              </div>
                              :
                              <div className='w-full mt-4'>
                                    <OpenMap
                                          selectPosition={selectPosition}
                                          setSelectPosition={setSelectPosition}
                                    />
                                    {/* <CharityGoogleMap /> */}
                              </div>
                  }

                  {/* <div className='mt-6'>
                        <label htmlFor="policy" className='cursor-pointer select-none'>
                              <input type="checkbox" name="" id="policy" />
                              <span className='text-gray-500 italic'> {t("donateAddTerms")}</span>
                        </label>
                  </div> */}
                  <button className='btn_primary w-full mt-6 py-3' type='submit'>{t("donateAddSubmit")}</button>
            </>
      );
};

export default DonateAddForm;