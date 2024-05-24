// /components/ThresholdInput.js
import React from "react";

const ThresholdInput = ({ equipmentId, setEquipmentId }) => {
  return (
    <div className="threshold-input">
      <label>Enter Vehicle Id: </label>
      <input
        type="string"
        value={equipmentId}
        onChange={(e) => setEquipmentId(e.target.value)}
      />
    </div>
  );
};

export default ThresholdInput;
