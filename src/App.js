import React, { useState, useEffect } from "react";

function App() {
  const [equipmentData, setEquipmentData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json"); // Path relative to public/
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setEquipmentData(data);
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
    <div>
      <h1>Equipment Data</h1>
      <ul>
        {equipmentData.map((item) => (
          <li key={item.eventGeneratedTime}>
            {item.EquipmentId} - {item.speed} km/h
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
