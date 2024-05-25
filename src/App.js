import React, { useState} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import { detectStoppages } from "./Hooks/stoppageDetection";
import Dialoguebox from "./components/Dialoguebox";

function App() {
  const [gpsData, setGpsData] = useState([
    {
      EquipmentId: "",
      latitude: 12.9294916,
      longitude: 74.9173533,
      speed: 0,
      "odometer reading": 750424,
      eventDate: 1716229800000,
      eventGeneratedTime: 1716229815000,
    },
  ]);
  const [error, setError] = useState(null);
  const [threshold, setThreshold] = useState(); // default to 5 minutes
  const [stoppages, setStoppages] = useState([]);
  const [equipmentId, setEquipmentId] = useState("");
  const [nav, setNav] = useState(false);
  
  const handleThresholdChange = (e) => {
    setThreshold(e.target.value);
  };
  const handleAnalyze = () => {
    const detectedStoppages = detectStoppages(gpsData, threshold);
    setStoppages(detectedStoppages);
  };

 const handleEquipmentAnalyze = () => {
   
     async function fetchData() {
       try {
         const response = await fetch("/data.json"); // Path relative to public/
         if (!response.ok) {
           throw new Error("Network response was not ok.");
         }
         const data = await response.json();
         setGpsData(data);
         setNav(true);
       } catch (err) {
         setError(err.message);
       }
     }
     fetchData();
  // Empty dependency array ensures this runs once on mount
   if (error) {
     return <div>Error: {error}</div>;
   }
 };
  

  

  return (
    <div className="relative ">
      {setEquipmentId && gpsData.length > 0 && (
        <Map gpsData={gpsData} stoppages={stoppages} />
      )}

      <div className="px-3 py-4 md:p-8 w-full absolute z-10">
        <Navbar />
      </div>
      <div className="px-3 top-44 md:px-8 absolute z-10 h-screen flex gap-12">
        <Sidebar nav={nav} setNav={setNav} />
        {nav && (
          <Dialoguebox
            equipmentId={equipmentId}
            setEquipmentId={setEquipmentId}
            threshold={threshold}
            handleThresholdChange={handleThresholdChange}
            handleAnalyze={handleAnalyze}
            handleEquipmentAnalyze={handleEquipmentAnalyze}
          />
        )}
      </div>
    </div>
  );
}

export default App;


