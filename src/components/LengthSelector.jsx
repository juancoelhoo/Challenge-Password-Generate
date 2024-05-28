import React from "react";

const LengthSelector = ({ length, setLength }) => {
  return (
    <div className="length-container">
      <div className="text-and-length">
        <div className="text">Character Length</div>
        <div className="length">{length}</div>
      </div>
      <input
        type="range"
        min="8"
        max="24"
        className="length-selector"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
    </div>
  );
};

export default LengthSelector;
