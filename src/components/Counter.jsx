import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsEmojiSmile, BsPeople } from 'react-icons/bs';
import { RiRocketLine } from 'react-icons/ri';
import styles from '../../styles/Home.module.scss';
import CounterChild from './CounterChild';

const Counter = () => {
      return (
            <div className={`gap ${styles.counter_container}`}>
                  <div className="container mx-auto px-3 sm:px-6">
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                              <CounterChild
                                    Icon={BsEmojiSmile}
                                    num='735'
                                    title='Happy Donators'
                              />
                              <CounterChild
                                    Icon={RiRocketLine}
                                    num='215'
                                    title='Success Mission'
                              />
                              <CounterChild
                                    Icon={BsPeople}
                                    num='320'
                                    title='Volunteer Reached'
                              />
                              <CounterChild
                                    Icon={BiWorld}
                                    num='27'
                                    title='Globalization Work'
                              />
                        </div>
                  </div>

            </div>
      );
};

export default Counter;