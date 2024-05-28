import React, { useState } from "react";
import LengthSelector from "./components/LengthSelector";
import OptionsSelector from "./components/OptionsSelector";
import PasswordDisplay from "./components/PasswordDisplay";
import GenerateButton from "./components/GenerateButton";
import "./App.css";

const App = () => {
  const [length, setLength] = useState(10); //Inicializa o estado do seletor de comprimento
  const [password, setPassword] = useState("P4$5W0rD!"); //Inicializa o estado da senha

  const generatePassword = () => {
    // Algoritmo de gerar senhas (Só a funcionalidade de comprimento tá funcionando no momento)
    let allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?"; //String contendo todos os caracteres de forma provisória

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      //Loop que seleciona caracteres aleatorios de um array com os caracteres (esse array não deve conter todos os caracteres igual tá agora, ele deve ter somente o marcado)
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }
    setPassword(generatedPassword); //Atualiza o estado da senha com a senha gerada
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="container1">
        <PasswordDisplay password={password} />
      </div>
      <div className="container2">
        <LengthSelector length={length} setLength={setLength} />
        <OptionsSelector />
        <GenerateButton generatePassword={generatePassword} />
      </div>
    </div>
  );
};

export default App;
