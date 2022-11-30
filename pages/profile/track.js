import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../src/components/AuthContext';
import HeroLayout from '../../src/components/Profile/HeroLayout';
import ProfileLayout from '../../src/components/Profile/ProfileLayout';
import TrackDonation from '../../src/components/Profile/TrackDonation';
import TrackDonationInfo from '../../src/components/Profile/TrackDonationInfo';

const Track = () => {
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
                              <HeroLayout title="Track Donation">
                                    <TrackDonation />
                                    <TrackDonationInfo />
                              </HeroLayout>
                        </ProfileLayout>
                  }
            </>
      );
};

export default Track;