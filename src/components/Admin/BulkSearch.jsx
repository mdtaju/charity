import {
      Chip
} from '@mui/material';
import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const BulkSearch = ({ values, setValues, searchHandler }) => {

      const [currValue, setCurrValue] = useState("");

      const handleKeyUp = (e) => {
            if (e.keyCode == 32) {
                  const conArr = e.target.value.split(' ');
                  const filArr = conArr.filter((item) => item !== "");
                  setValues((oldState) => [...oldState, ...filArr]);
                  setCurrValue("");
            }
      };

      const handleChange = (e) => {
            setCurrValue(e.target.value);
      };
      const pasteHandler = (e) => {
            const str = e.clipboardData.getData('Text');
            const conArr = str.split(' ');
            const filArr = conArr.filter((item) => item !== "");
            setValues((oldState) => [...oldState, ...filArr]);
            e.preventDefault()
      }

      const handleDelete = (item, index) => {
            let arr = [...values]
            arr.splice(index, 1)
            setValues(arr)
      }
      return (
            <div className=" max-w-[320px]  mb-3 mx-auto">
                  <div className={"w-full overflow-y-auto mb-2"}>
                        {values.map((item, index) => (
                              <Chip key={index} size="small" onDelete={() => handleDelete(item, index)} label={item} />
                        ))}
                  </div>
                  <div className='h-[40px] w-fit flex items-center relative'>
                        <div className='border border-[#0a5174] h-full p-1 rounded-md bg-gray-100'>
                              <input
                                    className='h-full w-[230px] bg-gray-100 border-none outline-none overflow-y-auto text-gray-700 px-2 text-sm placeholder:text-sm'
                                    type='text'
                                    placeholder="Enter ID's"
                                    value={currValue}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyUp}
                                    onPaste={pasteHandler}
                              />
                        </div>
                        <div onClick={searchHandler} className='btn_primary h-full absolute right-0 p-2 text-sm rounded-r-md flex items-center gap-1'>
                              <RiSearchLine /> Search</div>
                  </div>
            </div>
      );
};

export default BulkSearch;

