import React from "react";
import { useNavigate } from "react-router-dom";

function SelecionarTipoCadastro() {
  const navigate = useNavigate();

  const handleSelect = (tipo) => {
    if (tipo === "cpf") {
      navigate("/cadastro-pessoa-fisica");
    } else if (tipo === "cnpj") {
      navigate("/cadastro-pessoa-juridica");
    }
  };

  return (
    <div className="selecionar-cadastro-container">
      <h2>Selecione o tipo de cadastro</h2>
      <button onClick={() => handleSelect("cpf")}>Pessoa Física (CPF)</button>
      <button onClick={() => handleSelect("cnpj")}>Pessoa Jurídica (CNPJ)</button>
    </div>
  );
}

export default SelecionarTipoCadastro;
