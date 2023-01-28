import React from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const DateRangeFilter = ({ state, setState }) => {
      return (
            <div>
                  <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        ranges={state}
                        rangeColors={["#0A5174"]}
                  />
            </div>
      );
};

export default DateRangeFilter;