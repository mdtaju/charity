import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CharityGoogleMap from '../CharityGoogleMap';
import Input from '../Input';
import OptionInput from '../OptionInput';

const DonateAddForm = ({
      region,
      setRegion,
      city,
      setCity,
      district,
      setDistrict,
      address,
      setAddress,
      allRegion,
      allCity,
      allDistrict
}) => {
      const [addSwitch, setAddSwitch] = useState('Manually');
      const [locationRegion, setLocationRegion] = useState([])
      const [locationCity, setLocationCity] = useState([]);
      const [locationDistrict, setLocationDistrict] = useState([]);
      useEffect(() => {
            let region = [];
            let city = [];
            let district = [];
            for (let i = 0; i < allRegion.length; i++) {
                  const element = allRegion[i];
                  region.push(element.regionEnglishName);
            }
            for (let i = 0; i < allCity.length; i++) {
                  const element = allCity[i];
                  city.push(element.cityEnglishName);
            }
            for (let i = 0; i < allDistrict.length; i++) {
                  const element = allDistrict[i];
                  district.push(element.districtEnglishName);
            }
            setLocationRegion(region)
            setLocationCity(city)
            setLocationDistrict(district)
      }, [allRegion, allCity, allDistrict])
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
                              <FormControlLabel value="Manually" control={<Radio />} label="Manually" />
                              <FormControlLabel
                                    control={<Radio />}
                                    label="By Maps"
                                    value="By Maps"
                              />

                        </RadioGroup>
                  </FormControl>
                  {
                        addSwitch === 'Manually' ?
                              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                                    <OptionInput
                                          title="Region"
                                          lbl="Chose your region"
                                          state={region}
                                          setState={setRegion}
                                          options={locationRegion}

                                    />
                                    <OptionInput
                                          title="City"
                                          lbl="Chose your city"
                                          state={city}
                                          setState={setCity}
                                          options={locationCity}
                                    />
                                    <OptionInput
                                          title="District"
                                          lbl="Chose your district"
                                          state={district}
                                          setState={setDistrict}
                                          options={locationDistrict}
                                    />
                                    <Input
                                          value={address}
                                          onChange={(e) => setAddress(e.target.value)}
                                          title='Address'
                                          type='text'
                                          lbl='Enter your address'
                                          required
                                    />
                              </div> :
                              <div className='w-full mt-4'>
                                    <CharityGoogleMap />
                                    {/* <MapVanilla /> */}
                              </div>
                  }
                  <div className='mt-6'>
                        <label htmlFor="policy" className='cursor-pointer select-none'>
                              <input type="checkbox" name="" id="policy" />
                              <span className='text-gray-500 italic'> I agree to the Terms & Conditions</span>
                        </label>
                  </div>
                  <button className='btn_primary w-full mt-6 py-3' type='submit'>Submit</button>
            </>
      );
};

export default DonateAddForm;