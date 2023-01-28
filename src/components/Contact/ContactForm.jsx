import { useTranslation } from 'next-i18next';
import React from 'react';
import styles from '../../../styles/Contact.module.scss';

const ContactForm = () => {
      const { t } = useTranslation("contact");
      return (
            <div className='p-2'>
                  <div className={`w-full h-full ${styles.contact_banner}`}></div>
                  {/* <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>{t("contactFormTitle")}</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <form >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                              <Input
                                    type="text"
                                    title={t("contactFormInputNameTitle")}
                                    lbl={t("contactFormInputNameLabel")}
                              />
                              <Input
                                    type="tel"
                                    title={t("contactFormInputPhoneTitle")}
                                    lbl={t("contactFormInputPhoneLabel")}
                              />
                              <Input
                                    type="text"
                                    title={t("contactFormInputSubjectTitle")}
                                    lbl={t("contactFormInputSubjectLabel")}
                              />
                        </div>
                        <Input
                              type="text"
                              title={t("contactFormInputMcgTitle")}
                              lbl={t("contactFormInputMcgLabel")}
                              multiline
                              minRows={4}
                              maxRows={6}
                        />
                        <button className='btn_primary w-full mt-6'>{t("contactFormSubmit")}</button>
                  </form> */}
            </div>
      );
};

export default ContactForm;