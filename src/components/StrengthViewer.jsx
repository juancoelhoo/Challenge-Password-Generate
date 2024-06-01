import React from "react";

const StrengthViewer = ({ strength }) => {
  let strengthText;
  let strengthColor;

  switch (strength) {
    case 0:
      strengthText = "Very Weak";
      strengthColor = "red";
      break;
    case 1:
      strengthText = "Weak";
      strengthColor = "orange";
      break;
    case 2:
      strengthText = "Fair";
      strengthColor = "yellow";
      break;
    case 3:
      strengthText = "Good";
      strengthColor = "blue";
      break;
    case 4:
      strengthText = "Strong";
      strengthColor = "green";
      break;
    case 5:
      strengthText = "Very Strong";
      strengthColor = "darkgreen";
      break;
    default:
      strengthText = "";
      strengthColor = "gray";
  }

  return (
    <div className="pass_strength">
      <div className="strength_word">Strength</div>
      <div className="container_side">
        <div className="strength_changes" style={{ color: strengthColor }}>
          {strengthText}
        </div>
        <div className="bars">
          {/* Optionally add visual representation of the strength */}
        </div>
      </div>
    </div>
  );
};

export default StrengthViewer;
