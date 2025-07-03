import React, { useState } from "react";
import axios from "axios";

function CadastroPessoaJuridica() {
  const [formData, setFormData] = useState({
    razaoSocial: "",
    cnpj: "",
    telefone: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/clientes", formData);
      alert("Pessoa Jurídica cadastrada com sucesso!");
      setFormData({
        razaoSocial: "",
        cnpj: "",
        telefone: "",
        endereco: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar.");
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Pessoa Jurídica</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="razaoSocial"
          value={formData.razaoSocial}
          onChange={handleChange}
          placeholder="Razão Social"
          required
        />
        <input
          type="text"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
          placeholder="CNPJ"
          required
        />
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Telefone"
        />
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="Endereço"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroPessoaJuridica;
