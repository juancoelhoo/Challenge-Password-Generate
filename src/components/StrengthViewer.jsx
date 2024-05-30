import React from "react";

const StrengthViewer = ({ strength }) => {
  // Define strengthText based on the strength prop
  let strengthText;
  if (strength === 0) {
    strengthText = "";
  } else if (strength === 1) {
    strengthText = "Weak";
  } else if (strength === 2) {
    strengthText = "OK";
  } else if (strength === 3) {
    strengthText = "Medium";
  } else if (strength === 4) {
    strengthText = "Strong";
  }

  return (
    <div className="pass_strength">
      <div className="strength_word">Strength</div>
      <div className="container_side">
        <div className="strength_changes">{strengthText}</div>
        <div className="bars">
        </div>
      </div>
    </div>
  );
};

export default StrengthViewer;
