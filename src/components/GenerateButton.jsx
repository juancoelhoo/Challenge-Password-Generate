import React from "react";

const GenerateButton = ({ generatePassword }) => {
  return (
    <button onClick={generatePassword} className="generate-btn">
      Generate Password
    </button>
  );
};

export default GenerateButton;
