import { Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import DonateBanner from '../src/components/Donate/DonateBanner';
import Input from '../src/components/Input';
import Layout from '../src/components/Layout';
import TrackDonation from '../src/components/Profile/TrackDonation';
import TrackDonationInfo from '../src/components/Profile/TrackDonationInfo';
import styles from '../styles/Track.module.scss';

const Track = () => {
      const [trackInput, setTrackInput] = useState("");
      const [trackType, setTrackType] = useState("phone");
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
      const smallLetter = new RegExp("^(?=.*[a-z])");
      const capitalLetter = new RegExp("^(?=.*[A-Z])");
      const specialChar = new RegExp("^(?=.*[!@\$%\^&\*])(?=.{8,})");
      const handleSubmit = async (e) => {
            e.preventDefault();
            const checkSmall = smallLetter.test(trackInput);
            const checkCapital = capitalLetter.test(trackInput);
            const checkSpecial = specialChar.test(trackInput);
            const checkTrackID = trackInput.split('');
            if (trackInput.length < 1 && !checkSmall && !checkCapital) {
                  setSnakeState({ ...snakeState, open: true, mss: 'The number should be 9 digits.' });
                  return;
            }
            if (checkSmall || checkCapital || checkSpecial) {
                  setSnakeState({ ...snakeState, open: true, mss: 'Input should be a number.' });
                  return;
            }
            if (checkTrackID[0] === "#") {
                  checkTrackID.shift()
                  const removeChar = checkTrackID.join('');
                  setTrackType('trackId')
                  setTrackInput(removeChar);
            }
            const res = await axios.post('/api/donations/track', {
                  trackNumber: trackInput,
                  trackType
            })
            setTrackInfo(res.data);
            console.log(trackInfo)
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
                                          <form onSubmit={handleSubmit} className='max-w-[320px] mx-auto flex flex-col gap-6 mb-6'>
                                                <Input
                                                      title="Track donations by phone or track id"
                                                      lbl="Type your phone or track id"
                                                      type="tell"
                                                      onChange={(e) => setTrackInput(e.target.value)}
                                                />
                                                <button type="submit" className='btn_primary'>Submit</button>
                                          </form>
                                          <div>
                                                {
                                                      trackInfo.length === 0 ?
                                                            <p className='text-base text-gray-600 font-semibold italic'>
                                                                  Note: You can see all your donations by submitting with your phone number. And if you submit with your track id then you can see about that particular donation. Remember to start with # if you want to give your track id (Track ID Ex: #9018938489)
                                                            </p> :
                                                            <>
                                                                  {trackInfo.map((item, i) => (
                                                                        <div key={i} className='m-4 p-4 border border-gray-400'>
                                                                              <TrackDonation TrackStatus={item.trackStatus} />
                                                                              <TrackDonationInfo
                                                                                    id={item.trackID}
                                                                                    date={item.date}
                                                                                    pName={item.productName}
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

export default Track;