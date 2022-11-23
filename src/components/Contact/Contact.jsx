import React from 'react';
import styles from '../../../styles/Contact.module.scss';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
      return (
            <div className={`gap ${styles.contact_main_container}`}>
                  <div className='container mx-auto p-2 md:px-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              <ContactForm />
                              <ContactInfo />
                        </div>
                  </div>
            </div>
      );
};

export default Contact;