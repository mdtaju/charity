import React from 'react';

const TrackDonationInfo = ({ id, date, pName, pCondition }) => {
      const getDate = new Date(date);
      const convertDate = getDate.toUTCString();
      // console.log(convertDate.getMonth())
      return (
            <div className='mt-4'>
                  <p className='text-sm font-semibold text-gray-700'>Track id: #{id}</p>
                  <p className='text-sm font-semibold text-gray-700'>Date: {convertDate}</p>
                  <h1 className='text-sm text-[#0A5174] font-semibold mb-1 mt-6'>Product Name: </h1>
                  <p className='text-xl text-gray-600 font-medium mb-4'>{pName}</p>
                  <h1 className='text-sm text-[#0A5174] font-semibold mb-1 mt-6'>Product Condition: </h1>
                  <p className='text-xl text-gray-600 font-medium mb-4'>{pCondition}</p>
            </div>
      );
};

export default TrackDonationInfo;