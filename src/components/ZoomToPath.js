// src/components/ZoomToPath.js

import { useEffect } from "react";
import { useMap } from "react-leaflet";

const ZoomToPath = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions.length > 0) {
      const bounds = positions.map((pos) => [pos[0], pos[1]]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [positions, map]);

  return null;
};

export default ZoomToPath;
