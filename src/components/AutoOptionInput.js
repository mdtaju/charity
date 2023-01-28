import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const AutoOptionInput = ({ title, locations, state, setState, lbl }) => {
      return (
            <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-[#0A5174]'>{title}
                        {/* <span className='text-red-500 font-bold text-lg'>{"*"}</span> */}
                  </p>
                  <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={locations}
                        onChange={(e, value) => setState(value)}
                        // inputValue={state}

                        // sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label={lbl} variant='filled' />}
                  />
            </div>
      );
};

export default AutoOptionInput;