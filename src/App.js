import React, { useState, useEffect } from 'react';
import IdInput from "./components/IdInput";
import Map from "./components/Map";
import { detectStoppages } from "./Hooks/stoppageDetection";

function App() {
  const [gpsData, setGpsData] = useState([]);
  const [error, setError] = useState(null);
  const [threshold, setThreshold] = useState(5); // default to 5 minutes
  const [stoppages, setStoppages] = useState([]);
  const [equipmentId, setEquipmentId] = useState("EQPT-4");

  const handleThresholdChange = (e) => {
    setThreshold(e.target.value);
  };
  const handleAnalyze = () => {
    const detectedStoppages = detectStoppages(gpsData, threshold);
    setStoppages(detectedStoppages);
  };



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json'); // Path relative to public/
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setGpsData(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Stoppage Identification
      </h1>
      <div className="mb-4">
        <IdInput equipmentId={equipmentId} setEquipmentId={setEquipmentId} />
        <label className="block mb-2">Stoppage Threshold (minutes):</label>
        <input
          type="number"
          value={threshold}
          onChange={handleThresholdChange}
          className="p-2 border rounded"
        />
        <button
          onClick={handleAnalyze}
          className="ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Analyze
        </button>
      </div>
      {gpsData.length > 0 && (
        <Map gpsData={gpsData} stoppages={stoppages} />
      )}
    </div>
  );
}

export default App;
