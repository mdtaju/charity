import React, { useEffect, useState } from 'react';

const MapVanilla = () => {
      const [geocodeSate, setGeocodeState] = useState(null);
      const [mapper, setMapper] = useState(null);
      useEffect(() => {
            var geocoder = new google.maps.Geocoder();
            setGeocodeState(geocoder);
            var latlng = new google.maps.LatLng(-34.397, 150.644);
            var mapOptions = {
                  zoom: 8,
                  center: latlng
            }
            const map = new google.maps.Map(document.getElementById('map'), mapOptions);
            setMapper(map);
      }, [])

      function codeAddress() {
            var address = document.getElementById('address').value;
            geocodeSate.geocode({ 'address': address }, function (results, status) {
                  if (status == 'OK') {
                        mapper.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                              map: mapper,
                              position: results[0].geometry.location
                        });
                        console.log(marker)
                  } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                  }
            });
      }
      return (
            <>
                  <div id="map" style={{ width: "100%", height: '400px' }}></div>
                  <div>
                        <input id="address" type="textbox" value="Sydney, NSW" />
                        <input type="button" value="Encode" onclick={codeAddress} />
                  </div>
            </>
      );
};

export default MapVanilla;