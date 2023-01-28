import { Dialog } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiFillMinusCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const FileDelete = ({ images }) => {
      const { t } = useTranslation("upload_image");
      const [galleryImg, setGalleryImg] = useState([]);
      const [deleteInfo, setDeleteInfo] = useState([]);
      const [isMinusImg, setIsMinusImg] = useState(true);
      const [dialogOpen, setDialogOpen] = useState(false);
      const router = useRouter();

      useEffect(() => {
            setGalleryImg(images)
      }, [images])

      const handleImgMinus = (index) => {
            const filterImg = galleryImg.filter((item, i) => i !== index);
            setGalleryImg(filterImg);
            setIsMinusImg(false);
      }

      const handleReset = () => {
            setGalleryImg(images);
            setDeleteInfo([]);
            setIsMinusImg(true);
      }

      const handleDelete = () => {
            const results = images.filter(({ id: id1 }) => !galleryImg.some(({ id: id2 }) => id2 === id1));
            setDeleteInfo(results);
            setDialogOpen(true)
      }

      const handleConfirmDelete = () => {
            deleteInfo.map(async (item) => {
                  try {
                        const res = await axios.delete("/api/gallery", { data: { id: item.id } });
                        setIsMinusImg(true);
                        setDialogOpen(false);
                        router.replace(router.asPath);
                  } catch (error) {
                  }
            })
      }
      return (
            <div className='w-full border border-dashed border-[#0A5174] p-4'>
                  <h1 className='text-center text-xl font-bold text-[#0A5174]'>{t("upImgUpTitle")}</h1>
                  <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                        <div className='p-4 sm:p-6 min-w-[350px]'>
                              <div className='w-full mb-4 text-right'>
                                    <button onClick={() => setDialogOpen(false)} className='px-2 py-1 rounded-sm text-white font-bold text-xl bg-red-600'><AiOutlineCloseCircle /></button>
                              </div>

                              <div>
                                    <h1 className='text-xl text-[#0A5174] font-bold mb-4'>{t("upImgDelDlgTitle")}</h1>
                                    {
                                          deleteInfo.map((item, i) => (
                                                <p className='text-base text-gray-600 font-bold' key={i}>{item.id}</p>
                                          ))
                                    }
                                    <button onClick={handleConfirmDelete} className='btn_primary bg-red-600 w-full mt-4'>{t("upImgDelDlgBtn")}</button>
                              </div>
                        </div>
                  </Dialog>
                  {
                        galleryImg.length !== 0 &&
                        <>
                              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mt-4 gap-4">
                                    {
                                          galleryImg.map((item, i) => (
                                                <div key={i} className="w-[280px] h-[280px] overflow-hidden rounded flex items-center justify-center border-2 border-dashed border-[#0A5174] bg-[#0A5174] bg-opacity-10 relative">
                                                      <button onClick={() => handleImgMinus(i)} className='absolute z-10 top-2 right-2 w-fit h-fit cursor-pointer'><AiFillMinusCircle className='text-red-600 opacity-90 hover:opacity-100 text-2xl' /></button>
                                                      <img src={`/resources/upload/${item.id}`} alt="" className="w-full h-full object-contain" />
                                                </div>
                                          ))
                                    }
                              </div>

                        </>
                  }
                  <div className='w-fit flex items-center gap-4 mx-auto mt-6'>
                        <button
                              disabled={isMinusImg}
                              onClick={handleDelete}
                              style={{ opacity: isMinusImg ? ".5" : "1" }}
                              className='btn_primary bg-red-600'>{t("upImgDelBtn")}</button>
                        <button onClick={handleReset} className='btn_primary bg-green-600'>{t("upImgReBtn")}</button>
                  </div>
            </div>
      );
};

export default FileDelete;