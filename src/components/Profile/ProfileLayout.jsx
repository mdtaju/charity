import React from 'react';
import Layout from '../Layout';
import Sidebar from './Sidebar';

const ProfileLayout = ({ user, children }) => {
      return (
            <Layout>
                  <div className="gap mt-16">
                        <div className="container px-4 mx-auto">
                              <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                                    <div className="col-span-1 md:col-span-3">
                                          <Sidebar
                                                user={user}
                                          />
                                    </div>
                                    <div className="col-span-1 md:col-span-7">
                                          {children}
                                    </div>
                              </div>
                        </div>
                  </div>
            </Layout>
      );
};

export default ProfileLayout;