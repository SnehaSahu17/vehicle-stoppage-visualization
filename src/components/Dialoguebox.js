import React from 'react'
import IdInput from "./IdInput";

function Dialoguebox({equipmentId, setEquipmentId, threshold, handleThresholdChange, handleAnalyze}) {
  return (
    <div className=" bg-[#fdfdfd]  w-52 md:w-80 h-[70%] rounded-xl p-4 flex flex-col ">
      <h1 className="text-2xl font-semibold  text-[#0c1b2d]">
        Active Vehicles
      </h1>

      <div className="mt-4">
        <IdInput equipmentId={equipmentId} setEquipmentId={setEquipmentId} />
        <label className="text-lg block mb-2">Stoppage Threshold (minutes):</label>
        <input
          type="number"
          value={threshold}
          onChange={handleThresholdChange}
          className="p-2 border-2 border-[#6b7f97] rounded mb-4 w-full md:w-fit  "
          placeholder="Enter duration"
        />
        <button
          onClick={handleAnalyze}
          className="md:ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}

export default Dialoguebox