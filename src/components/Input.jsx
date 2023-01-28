import { TextField } from '@mui/material';
import React from 'react';

const Input = ({ title, lbl, ...rest }) => {

      return (
            <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-[#0A5174]'>{title}
                        {/* <span className='text-red-500 font-bold text-lg'>{"*"}</span> */}
                  </p>
                  <TextField
                        required
                        {...rest}
                        // id="contained"
                        variant='filled'
                        label={lbl}
                        fullWidth
                  />
            </div>
      );
};

export default Input;