import { distanceCalculation } from "./distCalc";

export const detectStoppages = (data, threshold) => {
  const stoppages = [];
  let currentStoppage = null;
  let totalDistance = 0;
  let lastPoint = null;

  for (let i = 0; i < data.length; i++) {
    const point = data[i];
    const currentCoords = { lat: point.latitude, lng: point.longitude };
    if (lastPoint) {
      totalDistance += distanceCalculation(lastPoint, currentCoords);
    }

    if (point.speed === 0) {
      if (!currentStoppage) {
        currentStoppage = {
          start: point.eventGeneratedTime,
          location: currentCoords,
          distance: totalDistance,
        };
      }
    } else {
      if (currentStoppage) {
        const duration =
          (point.eventGeneratedTime - currentStoppage.start) / 60000;
        if (duration >= threshold) {
          stoppages.push({
            reachTime: new Date(currentStoppage.start).toLocaleString(),
            endTime: new Date(point.eventGeneratedTime).toLocaleString(),
            duration: duration.toFixed(2),
            location: currentStoppage.location,
            distance: currentStoppage.distance.toFixed(2), // Distance in kilometers
          });
        }
        currentStoppage = null;
      }
    }
    lastPoint = currentCoords;
  }

  return stoppages;
};
