import React from 'react';

const AdminTrackStepper = ({ info, history }) => {
      const { trackStatus, driverPhone, driverName, reScheduleDate, clientDate, firstAssignedTime, receivedDate, fullName, createdBy, receivedBy, lastStatusUpdateBy, driverRegion, date } = info;
      const pureHistory = history.filter(item => item.status !== "Order Creation");
      console.log(pureHistory)
      return (
            <div className='max-w-[300px] sm:w-fit mx-auto p-4 grid grid-cols-1 items-start mt-6'>
                  {
                        pureHistory.map((item, i) => (
                              <div key={i} className='flex gap-6 items-start'>
                                    <div className='h-full flex flex-col items-center'>
                                          <div className='w-[10px] h-[10px] bg-gray-500 rounded-full'>
                                          </div>
                                          <div className='w-[1px] h-[140px] bg-gray-500'>
                                          </div>
                                    </div>
                                    <div className='flex flex-col items-center gap-2 w-full'>
                                          <p style={{ lineHeight: '0.5rem' }} className='text-base font-bold mb-2'>{item.status}</p>
                                          <p className='text-sm font-semibold'>{item.date}</p>
                                          <p className='text-sm font-semibold'>{item.description}</p>
                                          {
                                                (item.status === "Not Picked" && driverRegion) &&
                                                <p className='text-sm font-semibold'>{driverRegion}</p>
                                          }
                                          <p className='text-base font-normal mb-6'>Operation : {item.operation}</p>
                                    </div>
                              </div>
                        ))
                  }

                  <div className='flex gap-6 items-start'>
                        <div className='h-full flex flex-col items-center'>
                              <div className='w-[10px] h-[10px] bg-gray-500 rounded-full'>
                              </div>
                              {/* <div className='w-[1px] h-[120px] bg-gray-500'>
                              </div> */}
                        </div>
                        <div className='flex flex-col items-center gap-2 w-full'>
                              <p style={{ lineHeight: '0.5rem' }} className='text-base font-bold mb-2'>Order Creation</p>
                              <p className='text-sm font-semibold'>{date}</p>
                              <p className='text-sm font-semibold'>Order Created</p>
                              <p className='text-base font-normal mb-6'>Operation : {createdBy}</p>
                        </div>
                  </div>
            </div>
      );
};

export default AdminTrackStepper;