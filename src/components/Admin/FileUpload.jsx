import { Snackbar } from '@mui/material';
import axios from "axios";
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from "react";
import { AiFillMinusCircle } from 'react-icons/ai';

const FileUpload = () => {
  const { t } = useTranslation("upload_image");
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]);
  const [snakeState, setSnakeState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mss: ""
  });
  const router = useRouter();
  const { vertical, horizontal, open, mss } = snakeState;
  const handleClose = () => {
    setSnakeState({ ...snakeState, open: false, mss: "" });
  };
  const handleImgMinus = (index) => {
    const filterImg = selectedImage.filter((item, i) => i !== index);
    setSelectedImage(filterImg)
  }
  const handleUpload = () => {
    setUploading(true);
    selectedImage.length === 0 && setSnakeState({ ...snakeState, open: true, mss: "Please select an image." })
    if (selectedImage) {
      selectedImage.map(async (item, i) => {
        try {
          const formData = new FormData();

          formData.append("image", item);
          formData.append("ID", "99ll")
          await axios.post("/api/upload", formData);
          setSelectedImage([]);
          setSnakeState({ ...snakeState, open: true, mss: t("upImgUpSccMss") });
          router.replace(router.asPath);
        } catch (error) {
          setSnakeState({ ...snakeState, open: true, mss: t("upImgUpErrMss") })
        }
      })
    }
    setUploading(false);
  };

  return (
    <div className="p-6 text-center">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={mss}
        key={vertical + horizontal}
      />
      <div className="w-fit mx-auto">
        <label>
          <input
            type="file"
            multiple={true}
            accept="image/*"
            hidden
            onChange={({ target }) => {
              if (target.files) {
                const files = [...target.files];
                setSelectedImage([...selectedImage, ...files]);
              }
            }}
          />
          <div className="min-w-[300px] aspect-video rounded flex items-center justify-center border-2 border-dashed border-[#0A5174] cursor-pointer bg-[#0A5174] bg-opacity-10">
            <span className="text-lg font-bold text-gray-600">{t("upImgInTitle")}</span>
          </div>
        </label>
      </div>
      {
        selectedImage.length !== 0 &&
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 place-items-center mt-10 gap-4">
          {
            selectedImage.map((item, i) => (
              <div key={i} className="w-[280px] h-[280px] overflow-hidden rounded flex items-center justify-center border-2 border-dashed border-[#0A5174] bg-[#0A5174] bg-opacity-10 relative">
                <button onClick={() => handleImgMinus(i)} className='absolute z-10 top-2 right-2 w-fit h-fit cursor-pointer'><AiFillMinusCircle className='text-red-600 opacity-90 hover:opacity-100 text-2xl' /></button>
                <Image width={280} height={280} src={URL.createObjectURL(item)} alt="" className="w-full h-full object-contain" />
              </div>
            ))
          }
        </div>
      }
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-[#0A5174] p-3 w-32 mt-10 text-center rounded text-white"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button>
    </div>
  );
};


// export const getServerSideProps: GetServerSideProps = async () => {
//   const props = { dirs: [] };
//   try {
//     const dirs = await fs.readdir(path.join(process.cwd(), "/public/resources/upload"));
//     props.dirs = dirs as any;
//     return { props };
//   } catch (error) {
//     return { props };
//   }
// };
export default FileUpload;