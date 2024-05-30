import React, { useState } from "react";
import LengthSelector from "./components/LengthSelector";
import OptionsSelector from "./components/OptionsSelector";
import PasswordDisplay from "./components/PasswordDisplay";
import GenerateButton from "./components/GenerateButton";

import "./App.css";

const App = () => {
  const [length, setLength] = useState(10); //Inicializa o estado do seletor de comprimento
  const [password, setPassword] = useState("P4$5W0rD!"); //Inicializa o estado da senha
  const [strength, setStrength] = useState(0);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const generatePassword = () => {
  
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let availableChars = "";

    if (options.uppercase) availableChars += uppercaseChars;
    if (options.lowercase) availableChars += lowercaseChars;
    if (options.numbers) availableChars += numberChars;
    if (options.symbols) availableChars += symbolChars;

    if (availableChars === "") {
      setPassword("");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }
    setPassword(generatedPassword); //Atualiza o estado da senha com a senha gerada
  };

  const handleStrengthChange = (newStrength) => {
    setStrength(newStrength);
  }

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  }

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="container1">
        <PasswordDisplay password={password} />
      </div>
      <div className="container2">
        <LengthSelector length={length} setLength={setLength} />
        <OptionsSelector 
          onStrengthChange={handleStrengthChange}
          onOptionsChange={handleOptionsChange}
       />
        <GenerateButton generatePassword={generatePassword} />
      </div>
    </div>
  );
};

export default App;
