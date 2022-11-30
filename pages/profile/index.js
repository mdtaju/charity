import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../src/components/AuthContext';
import Dashboard from '../../src/components/Profile/Dashboard';
import HeroLayout from '../../src/components/Profile/HeroLayout';
import ProfileLayout from '../../src/components/Profile/ProfileLayout';
const DynamicUser = () => {
      const { currentUser } = useAuth();
      const router = useRouter();
      useEffect(() => {
            if (!currentUser) {
                  router.replace("/");
            }
      })
      return (
            <>
                  {
                        currentUser && <ProfileLayout user={currentUser}>
                              <HeroLayout title="My Profile">
                                    <Dashboard />
                              </HeroLayout>
                        </ProfileLayout>
                  }
            </>
      );
};

export default DynamicUser;