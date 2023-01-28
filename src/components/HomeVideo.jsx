import React from 'react';
import ReactPlayer from 'react-player/file';
const HomeVideo = () => {
      return (
            <div className='gap pb-0'>
                  <div className="container mx-auto px-2 sm:px-3">
                        <div className='p-4 border border-[#0A5174] rounded-md w-fit mx-auto'>
                              <ReactPlayer
                                    url={'/resources/images/rhma.mp4'}
                                    controls={true}
                                    width='100%'
                              />
                        </div>
                  </div>
            </div>
      );
};

export default HomeVideo;