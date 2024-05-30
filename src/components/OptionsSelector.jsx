import React, { useEffect, useState } from "react";

const OptionsSelector = ({onStrengthChange, onOptionsChange}) => {
  const[strength, setStrength] = useState(0);
  const[options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const newOptions = {
      ...options,
      [name]: checked,
    };
    setOptions(newOptions);
    onOptionsChange(newOptions);

    const selectedCount = Object.values(newOptions).filter(Boolean).length;
    setStrength(selectedCount);
  };

  useEffect(() => {
    if (onStrengthChange) {
      onStrengthChange(strength);
    }
  }, [strength, onStrengthChange]);

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
    <div>
      <div className="options">
        <label>
          <input
            type="checkbox" 
            name="uppercase"
            checked={options.uppercase}
            onChange={handleCheckboxChange}
          />
          Include Uppercase Letters
        </label>
        <label>
        <input
            type="checkbox" 
            name="lowercase"
            checked={options.lowercase}
            onChange={handleCheckboxChange}
          />
          Include Lowercase Letters
        </label>
        <label>
        <input
            type="checkbox" 
            name="numbers"
            checked={options.numbers}
            onChange={handleCheckboxChange}
          />
          Include Numbers
        </label>
        <label>
        <input
            type="checkbox" 
            name="symbols"
            checked={options.symbols}
            onChange={handleCheckboxChange}
          />
          Include Symbols
        </label>
      </div>

      <div className="pass_strength">
        <div className="strength_word">Strength</div>
        <div className="container_side">
          <div className="strength_changes">{strengthText}</div>
          <div className="bars">
            <div style={{ backgroundColor: strength > 0 ? "#ffc300" : "black" }}></div>
            <div style={{ backgroundColor: strength > 1 ? "#ffc300" : "black" }}></div>
            <div style={{ backgroundColor: strength > 2 ? "#ffc300" : "black" }}></div>
            <div style={{ backgroundColor: strength > 3 ? "#ffc300" : "black" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsSelector;
