

import React from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  ZoomControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import customIcon from "./customIcon";

const Map= ({ gpsData, stoppages }) => {
  const positions = gpsData.map((point) => [point.latitude, point.longitude]);

  return (
    <MapContainer center={positions[0]} zoom={10} className="h-screen w-full absolute z-0" zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      <Polyline positions={positions} color="blue" />
      {stoppages.map((stop, index) => (
        <Marker key={index} position={stop.location} icon={customIcon}>
          <Popup>
            <div>
              <p>
                <strong>Reach Time:</strong> {stop.reachTime}
              </p>
              <p>
                <strong>End Time:</strong> {stop.endTime}
              </p>
              <p>
                <strong>Duration:</strong> {stop.duration} minutes
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
