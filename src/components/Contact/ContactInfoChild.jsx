import React from 'react';

const ContactInfoChild = ({ Icon, title, info, infoTwo }) => {
      return (
            <div className='flex items-start gap-6 mt-3'>
                  <Icon className="text-4xl text-gray-800" />
                  <div>
                        <p className='text-lg text-gray-700'>{title}</p>
                        <p className='text-base text-gray-500'>{info}</p>
                        {
                              infoTwo &&
                              <p className='text-base text-gray-500'>{infoTwo}</p>
                        }
                  </div>
            </div>
      );
};

export default ContactInfoChild;