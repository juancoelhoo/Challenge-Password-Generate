import React, { useEffect, useState } from "react";
import StrengthViewer from "./StrengthViewer";

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
      <StrengthViewer strength={strength}></StrengthViewer>
      
    </div>
  );
};

export default OptionsSelector;
