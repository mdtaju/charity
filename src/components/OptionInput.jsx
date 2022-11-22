import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const OptionInput = ({ title, lbl, options, state, setState, ...rest }) => {
      const handleChange = (e) => {
            setState(e.target.value)
      }
      return (
            <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-[#0A5174]'>{title}
                        {/* <span className='text-red-500 font-bold text-lg'>{"*"}</span> */}
                  </p>
                  <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{lbl}</InputLabel>
                        <Select
                              {...rest}
                              required
                              fullWidth
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={state}
                              label={lbl}
                              onChange={handleChange}
                              variant="filled"
                        >
                              {
                                    options.map((item, i) => (
                                          <MenuItem value={item} key={i}>{item}</MenuItem>
                                    ))
                              }
                        </Select>
                  </FormControl>
                  {/* <select defaultValue={'DEFAULT'} {...rest} className='default_select'>
                        <option style={{ padding: '5px !important' }} value="DEFAULT" disabled>{defOption}</option>
                        {
                              options.map((item, i) => (
                                    <option value={item} key={i}>{item}</option>
                              ))
                        }
                  </select> */}
            </div>
      );
};

export default OptionInput;