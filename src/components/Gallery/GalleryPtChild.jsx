import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineEye } from 'react-icons/ai';

const GalleryPtChild = ({ image }) => {
      const [dialogOpen, setDialogOpen] = useState(false);
      return (
            <div className='w-full h-[211px] relative group/ptGI'>
                  <Dialog fullWidth={true} open={dialogOpen} onClose={() => setDialogOpen(false)}>
                        <div className='p-4 sm:p-6 w-full h-full'>
                              <div className='w-full mb-4 text-right'>
                                    <button onClick={() => setDialogOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                              </div>
                              <img className='w-full h-full object-contain' src={image} alt='event-image' />
                        </div>
                  </Dialog>
                  <img className='w-full h-full object-cover absolute top-0 right-0' src={image} alt='event-image' />
                  <div className='w-full h-[211px] bg-black bg-opacity-70 absolute scale-95 group-hover/ptGI:scale-100 top-0 right-0 z-10 flex items-center justify-center invisible group-hover/ptGI:visible duration-150 ease-in-out'>
                        <div onClick={() => setDialogOpen(true)} className='p-2 bg-gray-500 rounded-full w-fit cursor-pointer'>
                              <AiOutlineEye className='text-white text-lg font-medium' />
                        </div>
                  </div>
            </div>
      );
};

export default GalleryPtChild;