import { useTranslation } from 'next-i18next';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Progressbar = ({ donations, pick, close }) => {
      const { t } = useTranslation("dashboard");
      return (
            <div className='flex flex-col sm:flex-row gap-6 w-fit mx-auto'>
                  <div className='flex flex-col gap-4'>
                        <div style={{ width: 150, height: 150 }}>
                              <CircularProgressbar
                                    value={donations}
                                    text={`${donations}`}
                                    styles={buildStyles({
                                          textColor: "#0A5170",
                                          pathColor: "#0A5170",
                                          trailColor: "#0A5170"
                                    })}
                              />
                        </div>
                        <div>
                              <p className='text-lg font-bold text-center'>{t("dashSecTwoBlgOne")}</p>
                        </div>
                  </div>

                  <div className='flex flex-col gap-4'>
                        <div style={{ width: 150, height: 150 }}>
                              <CircularProgressbar
                                    value={pick}
                                    text={`${pick}`}
                                    maxValue={donations}
                                    minValue={0}
                                    styles={buildStyles({
                                          textColor: "#0A5170",
                                          pathColor: "#2edd2e",
                                          trailColor: "#0A5170"
                                    })}
                              />
                        </div>
                        <div>
                              <p className='text-lg font-bold text-center'>{t("dashSecTwoBlgTwo")}</p>
                        </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                        <div style={{ width: 150, height: 150 }}>
                              <CircularProgressbar
                                    value={donations - (pick + close)}
                                    text={`${donations - (pick + close)}`}
                                    maxValue={donations}
                                    minValue={0}
                                    styles={buildStyles({
                                          textColor: "#0A5170",
                                          pathColor: "gold",
                                          trailColor: "#0A5170"
                                    })}
                              />
                        </div>
                        <div>
                              <p className='text-lg font-bold text-center'>{t("dashSecTwoBlgThree")}</p>
                        </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                        <div style={{ width: 150, height: 150 }}>
                              <CircularProgressbar
                                    value={close}
                                    text={`${close}`}
                                    maxValue={donations}
                                    minValue={0}
                                    styles={buildStyles({
                                          textColor: "#0A5170",
                                          pathColor: "red",
                                          trailColor: "#0A5170"
                                    })}
                              />
                        </div>
                        <div>
                              <p className='text-lg font-bold text-center'>{t("dashSecTwoBlgFour")}</p>
                        </div>
                  </div>
            </div>
      );
};

export default Progressbar;