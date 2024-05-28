import React from "react";

const OptionsSelector = () => {
  return (
    <div className="options">
      <label>
        <input type="checkbox" />
        Include Uppercase Letters
      </label>
      <label>
        <input type="checkbox" />
        Include Lowercase Letters
      </label>
      <label>
        <input type="checkbox" />
        Include Numbers
      </label>
      <label>
        <input type="checkbox" />
        Include Symbols
      </label>
    </div>
  );
};

export default OptionsSelector;
