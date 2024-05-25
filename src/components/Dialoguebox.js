import React from "react";

function Dialoguebox({
  equipmentId,
  setEquipmentId,
  threshold,
  handleThresholdChange,
  handleAnalyze,
  handleEquipmentAnalyze,
  stoppages,
}) {
  return (
    <div className=" bg-[#fdfdfd]  w-52 md:w-80 h-[70%] rounded-xl p-4 flex flex-col relative ">
      <h1 className="text-2xl font-semibold  text-[#0c1b2d]">
        Active Vehicles
      </h1>

      <div className="mt-4">
        <input
          type="string"
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
          className="p-2 border-2 border-[#6b7f97] rounded mb-4 w-full md:w-fit  "
          placeholder="Enter Equipment ID"
        />
        <button
          onClick={handleEquipmentAnalyze}
          className="md:ml-4 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
        <label className="text-lg block mb-2">
          Stoppage Threshold (minutes):
        </label>
        <input
          type="number"
          value={threshold}
          onChange={handleThresholdChange}
          className="p-2 border-2 border-[#6b7f97] rounded mb-4 w-full md:w-fit  "
          placeholder="Enter duration"
        />
        <button
          onClick={handleAnalyze}
          className="md:ml-4 py-2 px-1 bg-blue-500 text-white rounded"
        >
          Analyze
        </button>
        <div>
          Click on{" "}
          <img
            src="https://img.icons8.com/?size=100&id=PZTTDl8ML4vy&format=png&color=000000"
            className="w-8 h-8 inline-flex"
            alt="icon"
          ></img>
          &nbsp;to view the details
        </div>
      </div>

      {/* details of stoppages */}
      <div className="mb-2">
        <h1 className="text-xl font-semibold  text-[#0c1b2d]">
          Stoppage Details
        </h1>
        <div className="mt-2 h-20 sm:h-56 md:h-[16rem]  2xl:h-[20rem] overflow-y-auto">
          {stoppages.map((stoppage, index) => (
            <div key={index} className="mt-2">
              <h2 className=" text-lg font-medium  text-[#af3535]">
                Stoppage {index + 1}
              </h2>
              <p className="text-[#4a5a6d] text-sm md:text-md">
                Reach Time:{" "}
                <span className="text-[#6b7f97] text-sm ">
                  {stoppage.reachTime}
                </span>
              </p>
              <p className="text-sm md:text-md">
                End Time:
                <span className="text-[#6b7f97] text-sm ">
                  {stoppage.endTime}
                </span>
              </p>
              <p className="text-sm md:text-md">
                Duration:
                <span className="text-[#6b7f97] text-sm ">
                  {stoppage.duration} minutes
                </span>
              </p>
              <p className="text-sm md:text-md">
                Distance Covered:
                <span className="text-[#6b7f97] text-sm ">
                  {stoppage.distance} km
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dialoguebox;
