// src/customMarker.js

import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://img.icons8.com/?size=100&id=96RE9rrwGcm6&format=png&color=000000", // URL to your custom icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // Leaflet's default marker shadow
  shadowSize: [41, 41],
});

export default customIcon;
