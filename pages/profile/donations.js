import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../src/components/AuthContext';
import HeroLayout from '../../src/components/Profile/HeroLayout';
import ProfileLayout from '../../src/components/Profile/ProfileLayout';
const Donations = () => {
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
                              <HeroLayout title="My Donations">
                              </HeroLayout>
                        </ProfileLayout>
                  }
            </>
      );
};

export default Donations;