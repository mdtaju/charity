import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import * as React from 'react';

export default function DateInput({ title, lbl, state, setState }) {
      return (
            <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-[#0A5174]'>{title}
                        {/* <span className='text-red-500 font-bold text-lg'>{"*"}</span> */}
                  </p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                              label={lbl}
                              value={state}
                              onChange={(newValue) => {
                                    setState(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} variant='filled' />}
                              disablePast={true}
                        />
                  </LocalizationProvider>
            </div>

      );
}
