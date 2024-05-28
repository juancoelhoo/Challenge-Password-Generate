import React from "react";

const PasswordDisplay = ({ password }) => {
  // Função para copiar a senha para a área de transferência
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).catch((err) => {
      alert("Falha ao copiar a senha: ", err);
    });
  };

  return (
    password && (
      <div className="password-display">
        <div className="password">{password}</div>
        <button className="btn-copy" onClick={copyToClipboard}>
          <img src="src/assets/images/copy-icon.svg" alt="Copy Icon" />
        </button>
      </div>
    )
  );
};

export default PasswordDisplay;
