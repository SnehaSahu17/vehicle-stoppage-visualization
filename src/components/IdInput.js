
import React from "react";

const ThresholdInput = ({ equipmentId, setEquipmentId }) => {
  return (
    <div className="threshold-input">
      <input
        type="string"
        value={equipmentId}
        onChange={(e) => setEquipmentId(e.target.value)}
        className="p-2 border-2 border-[#6b7f97] rounded w-full mb-4"
        placeholder="Enter Equipment ID"
      />
    </div>
  );
};

export default ThresholdInput;
