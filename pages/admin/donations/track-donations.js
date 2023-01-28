import { Snackbar } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../src/components/Admin/AdminLayout';
import AdminTrackInfo from '../../../src/components/Admin/AdminTrackInfo';
import AdminTrackStepper from '../../../src/components/Admin/AdminTrackStepper';
import Input from '../../../src/components/Input';
import TrackDonation from '../../../src/components/Profile/TrackDonation';
import { UseRole } from '../../../src/hoke/useRole';
// import { getRole } from '../../../src/hoke/useRoleServer';
import styles from '../../../styles/Track.module.scss';

const TrackDriver = () => {
      const { t } = useTranslation("track");
      const [trackInput, setTrackInput] = useState("");
      const [trackInfo, setTrackInfo] = useState([]);
      const [trackHistory, setTrackHistory] = useState([]);
      const router = useRouter()
      const URole = UseRole();
      const [snakeState, setSnakeState] = useState({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            mss: ""
      });
      useEffect(() => {
            const getHistory = async () => {
                  const { token } = parseCookies();
                  if (token) {
                        if (URole === "Default") {
                              console.log(URole)
                              await router.push('/admin/dashboard')
                        }
                  } else {
                        await router.push('/admin');
                  }
            }
            getHistory()
      }, [])
      const { vertical, horizontal, open, mss } = snakeState;
      const handleClose = () => {
            setSnakeState({ ...snakeState, open: false });
      };
      const handleSubmit = async (e) => {
            e.preventDefault();

            let trackType;
            if (trackInput[0] === "8") {
                  // const removeChar = checkTrackID.join('');
                  trackType = 'trackId';
                  // setTrackInput(removeChar);
            } else {
                  trackType = 'phone';
            }

            const res = await axios.post('/api/donations/track', {
                  trackNumber: trackInput,
                  trackType
            })
            const response = await axios.post('/api/get-history', {
                  trackNumber: trackInput,
                  trackType
            })
            const revData = await response.data.reverse();

            setTrackHistory(revData)
            setTrackInfo(res.data);
      }
      return (
            <AdminLayout>
                  <div className='gap'>
                        <div className="container mx-auto p-4">
                              <div className="border border-[#0A5174] w-full mx-auto p-4 rounded-sm">
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
                                                      title={t("trackInputTitle")}
                                                      lbl={t("trackInputLabel")}
                                                      type="number"
                                                      onChange={(e) => setTrackInput(e.target.value)}
                                                />
                                                <button type="submit" className='btn_primary'>{t("trackSubmit")}</button>
                                          </form>
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
                                                                              <AdminTrackInfo info={item} />
                                                                              <AdminTrackStepper info={item} history={trackHistory} />
                                                                        </div>
                                                                  ))}
                                                            </>
                                                }
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </AdminLayout>
      );
};
export async function getStaticProps(context) {
      // const { token, role } = parseCookies(context);
      // const URole = await getRole(role);
      // const { res } = context;
      // if (!token) {
      //       res.writeHead(302, { Location: "/admin" });
      //       res.end();
      // }
      // if (URole !== "Super-Admin" || URole !== "Admin" || URole !== "Customer-Service" || URole !== "Operation") {
      //       res.writeHead(302, { Location: "/admin/dashboard" });
      //       res.end();
      // }
      return {
            props: {
                  ...(await serverSideTranslations(context.locale, [
                        'common_dashboard',
                        'track',
                  ])),
            }
      }
}
export default TrackDriver;