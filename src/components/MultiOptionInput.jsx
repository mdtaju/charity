import { FilledInput } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
      PaperProps: {
            style: {
                  maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                  width: 250,
            },
      },
};
const MultiOptionInput = ({ title, lbl, options, state, setState, ...rest }) => {
      const handleChange = (event) => {
            const {
                  target: { value },
            } = event;
            setState(
                  // On autofill we get a stringified value.
                  typeof value === 'string' ? value.split(',') : value,
            );
      };
      return (
            <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-[#0A5174]'>{title}
                        {/* <span className='text-red-500 font-bold text-lg'>{"*"}</span> */}
                  </p>
                  <FormControl fullWidth>
                        <InputLabel id="demo-multiple-checkbox-label">{lbl}</InputLabel>
                        <Select
                              {...rest}
                              multiple
                              required
                              value={state}
                              onChange={handleChange}
                              input={<FilledInput label={lbl} />}
                              renderValue={(selected) => selected.join(', ')}
                              MenuProps={MenuProps}
                        >
                              {options.map((name) => (
                                    <MenuItem key={name} value={name}>
                                          <Checkbox checked={state.indexOf(name) > -1} />
                                          <ListItemText primary={name} />
                                    </MenuItem>
                              ))}
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

export default MultiOptionInput;