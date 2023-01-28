import { Snackbar } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';
import DonateBanner from '../src/components/Donate/DonateBanner';
import Input from '../src/components/Input';
import Layout from '../src/components/Layout';
import TrackDonation from '../src/components/Profile/TrackDonation';
import TrackDonationInfo from '../src/components/Profile/TrackDonationInfo';
import styles from '../styles/Track.module.scss';

const Track = () => {
      const { t } = useTranslation("track");
      const [trackInput, setTrackInput] = useState('');
      const [trackInfo, setTrackInfo] = useState([]);
      const [snakeState, setSnakeState] = useState({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });
      const { vertical, horizontal, open, mss } = snakeState;
      const handleClose = () => {
            setSnakeState({ ...snakeState, open: false });
      };

      const handleClick = async () => {
            let trackT;
            if (trackInput[0] === "8") {
                  // const removeChar = checkTrackID.join('');
                  trackT = "trackId";
                  // setTrackInput(removeChar);
            } else {
                  trackT = "phone";
            }
            try {
                  const res = await axios.post('/api/donations/track', {
                        trackNumber: trackInput,
                        trackType: trackT
                  })
                  setTrackInfo(res.data);
                  res.data.length === 0 && alert("Wrong phone number or track id. Please try again.")
            } catch (error) {
                  alert("Wrong phone number or track id. Please try again.")
            }
      }
      return (
            <Layout>
                  <DonateBanner />
                  <div className='gap'>
                        <div className="container mx-auto p-4">
                              <div className="border border-[#0A5174] w-full md:w-[740px] mx-auto p-4 rounded-sm">
                                    <div className={styles.track_info_container}>
                                          <Snackbar
                                                anchorOrigin={{ vertical, horizontal }}
                                                open={open}
                                                onClose={handleClose}
                                                message={mss}
                                                key={vertical + horizontal}
                                          />
                                          <div className='max-w-[320px] mx-auto flex flex-col gap-6 mb-6'>
                                                <Input
                                                      title={t("trackInputTitle")}
                                                      lbl={t("trackInputLabel")}
                                                      type="text"
                                                      onChange={(e) => setTrackInput(e.target.value)}
                                                />
                                                <button onClick={() => handleClick()} type="submit" className='btn_primary'>{t("trackSubmit")}</button>
                                          </div>
                                          <div>
                                                {
                                                      trackInfo.length === 0 ?
                                                            <p className='text-base text-gray-600 font-semibold italic'>
                                                                  {t("trackNoteMcs")}
                                                            </p> :
                                                            <>
                                                                  {trackInfo.map((item, i) => (
                                                                        <div key={i} className='m-4 p-4 border border-gray-400'>
                                                                              <TrackDonation TrackStatus={item.trackStatus} />
                                                                              <TrackDonationInfo
                                                                                    id={item.id}
                                                                                    date={item.date}
                                                                                    auth={"user"}
                                                                                    pName={item.productDescription}
                                                                                    pCondition={item.productCondition}
                                                                              />

                                                                        </div>
                                                                  ))}
                                                            </>
                                                }
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Layout>
      );
};
export async function getStaticProps({ locale }) {
      return {
            props: {
                  ...(await serverSideTranslations(locale, [
                        'common',
                        'track',
                  ])),
            }
      }
}
export default Track;