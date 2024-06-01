import React, { useEffect, useState } from "react";
import StrengthViewer from "./StrengthViewer";

const OptionsSelector = ({ length, onStrengthChange, onOptionsChange }) => {
  const [options, setOptions] = useState({
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
  };

  const computeStrength = () => {
    const selectedCount = Object.values(options).filter(Boolean).length;
    if (selectedCount === 0) {
      return 0; // No options selected
    }
    // Calculate strength based on length and selected options
    if (selectedCount === 1) {
      return length >= 12 ? 2 : 1; // Weak if length < 12, Fair if length >= 12
    }
    if (selectedCount === 2) {
      return length >= 12 ? 3 : 2; // Fair if length < 12, Good if length >= 12
    }
    if (selectedCount === 3) {
      return length >= 12 ? 4 : 3; // Good if length < 12, Strong if length >= 12
    }
    return length >= 12 ? 5 : 4; // Strong if length < 12, Very Strong if length >= 12
  };

  useEffect(() => {
    const strength = computeStrength();
    if (onStrengthChange) {
      onStrengthChange(strength);
    }
  }, [options, length, onStrengthChange]);

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
      <StrengthViewer strength={computeStrength()} />
    </div>
  );
};

export default OptionsSelector;
