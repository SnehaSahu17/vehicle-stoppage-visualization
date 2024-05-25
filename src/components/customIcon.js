// src/customMarker.js

import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://img.icons8.com/?size=100&id=PZTTDl8ML4vy&format=png&color=000000", // URL to your custom icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default customIcon;
