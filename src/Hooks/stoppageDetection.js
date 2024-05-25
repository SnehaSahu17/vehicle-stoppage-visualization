
export const detectStoppages = (data, threshold) => {
  const stoppages = [];
  let currentStoppage = null;

  for (let i = 0; i < data.length; i++) {
    const point = data[i];

    if (point.speed === 0) {
      if (!currentStoppage) {
        currentStoppage = {
          start: point.eventGeneratedTime,
          location: { lat: point.latitude, lng: point.longitude },
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
          });
        }
        currentStoppage = null;
      }
    }
  }

  return stoppages;
};
