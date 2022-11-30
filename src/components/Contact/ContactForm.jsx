import React from 'react';
import Input from '../Input';

const ContactForm = () => {
      return (
            <div className='p-2'>
                  <div className='mb-4'>
                        <h1 className='mb-2 capitalize font-medium text-xl text-[#0A5174]'>Interested in discussing?</h1>
                        <div className='w-1/2 h-[1px] bg-[#0A5174]'></div>
                  </div>
                  <form >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                              <Input
                                    type="text"
                                    title="Name"
                                    lbl="Enter you name"
                              />
                              <Input
                                    type="tel"
                                    title="Phone"
                                    lbl="Enter you name"
                              />
                              <Input
                                    type="text"
                                    title="Subject"
                                    lbl="Enter a Subject"
                              />
                        </div>
                        <Input
                              type="text"
                              title="Message"
                              lbl="Enter a your message"
                              multiline
                              rows={4}
                              maxRows={6}
                        />
                        <button className='btn_primary w-full mt-6'>Send you message</button>
                  </form>
            </div>
      );
};

export default ContactForm;