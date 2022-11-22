import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import Input from '../Input';
import OptionInput from '../OptionInput';
// import OptionInput from '../OptionInput';

const DonateAddForm = () => {
      const [cityName, setCityName] = useState('');
      const [districtName, setDistrictName] = useState('');
      const [addSwitch, setAddSwitch] = useState('Manually');

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
                                    label="Automatic"
                                    value="Automatic"
                              />

                        </RadioGroup>
                  </FormControl>
                  {
                        addSwitch === 'Manually' ?
                              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                                    <OptionInput
                                          title="City"
                                          lbl="Chose your city"
                                          state={cityName}
                                          setState={setCityName}
                                          options={['city 1', 'city 2', 'city-3']}

                                    />
                                    <OptionInput
                                          title="District"
                                          lbl="Chose your district"
                                          state={districtName}
                                          setState={setDistrictName}
                                          options={['district 1', 'district 2', 'district-3']}

                                    />
                                    <Input title='Address line 1' type='text' lbl='Enter your address' required />
                                    <Input title='Address line 2' type='text' lbl='Enter your address' required />
                              </div> :
                              <p className='text-center my-8 text-2xl'>Google map is coming soon</p>
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