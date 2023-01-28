import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import LocIcon from '../../../public/resources/images/placeholder.png';

const ICON = icon({
      iconUrl: '/placeholder_64x64.png',
      iconSize: [32, 32],
});

const position = [24.454770, 39.546210];
// 22.235522716278666, 91.79131643330025
// 24.454770, 39.546210

function ResetCenterView(props) {
      const { selectPosition } = props;
      const map = useMap();

      useEffect(() => {
            if (selectPosition) {
                  map.setView(
                        L.latLng(selectPosition?.lat, selectPosition?.lon),
                        map.getZoom(),
                        {
                              animate: true
                        }
                  )
            }
      }, [selectPosition, map]);

      return null;
}

export default function Maps(props) {
      const { selectPosition } = props;
      const locationSelection = [selectPosition?.lat, selectPosition?.lon];

      return (
            <MapContainer
                  center={position}
                  zoom={14}
                  style={{ width: "100%", height: "400px", zIndex: '0', borderRadius: '7px' }}
            >
                  <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=A38eBvRFifFgCamG2T8e"
                  />
                  {selectPosition && (
                        <Marker position={locationSelection} icon={ICON}>
                              <Popup>
                                    Your location <br /> successfully set.
                              </Popup>
                        </Marker>
                  )}
                  <ResetCenterView selectPosition={selectPosition} />
            </MapContainer>
      );
}