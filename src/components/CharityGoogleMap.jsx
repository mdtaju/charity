import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import UseSkeleton from './UseSkeleton';
const containerStyle = {
      width: '100%',
      borderRadius: '5px',
      height: '400px'
};
// Medina Location code: 24.480813245834575, 39.60789258961664
const center = {
      lat: 24.480813245834575,
      lng: 39.60789258961664
};
const CharityGoogleMap = () => {
      const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: "AIzaSyAkbymp5iyJD-4_GKPp8Ygj0RSguqLFJcM"
      })

      const [mapper, setMapper] = React.useState(null)
      const [codder, setCodder] = React.useState(null)

      const onLoad = React.useCallback(function callback(map) {
            const geocoder = new window.google.maps.Geocoder();
            setCodder(geocoder)

            console.log("Maps loaded")
      }, [])

      const onUnmount = React.useCallback(function callback(map) {
            setMapper(null)

            console.log("Maps Unmount")
      }, [])
      const handleMap = () => {
            codder.geocode({ 'placeId': 'ChIJbx-pchSWURARL4YujhB4XrU' }, function (results, status) {
                  if (status == 'OK') {
                        setMapper(mapper.setCenter(results[0].geometry.location));
                        var marker = new google.maps.Marker({
                              map: map,
                              position: results[0].geometry.location
                        });
                        console.log(marker)
                  } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                  }
            })
      }
      console.log(mapper)
      return isLoaded ? (
            <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
            >
                  { /* Child components, such as markers, info windows, etc. */}
                  <>
                        <Marker />
                        <div onClick={handleMap} className='btn_primary'>Try it</div>
                  </>
            </GoogleMap>
      ) : <UseSkeleton
            vrn="rounded"
            wd={"100%"}
            ht={400}
            animation='wave'
      />

};

export default CharityGoogleMap;