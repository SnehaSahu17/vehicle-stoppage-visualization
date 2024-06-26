
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
import ZoomToPath from "./ZoomToPath";

const Map= ({ gpsData, stoppages ,shouldZoom}) => {
  const positions = gpsData.map((point) => [point.latitude, point.longitude]);

  return (
    <MapContainer
      center={positions[0]}
      zoom={10}
      className="h-screen w-full absolute z-0"
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      <ZoomToPath positions={positions} shouldZoom={shouldZoom} />
      <Polyline positions={positions} color="blue" />
      {stoppages.map((stop, index) => (
        <Marker key={index} position={stop.location} icon={customIcon}>
          <Popup>
            <div>
              <p>
                <strong>Stoppage No.:</strong> {stop.count}
              </p>
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
