import React, { useState } from "react";
import axios from "axios";

function CadastroPessoaFisica() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
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
      await axios.post("http://localhost:5000/api/clientes/fisica", formData);
      alert("Pessoa Física cadastrada com sucesso!");
      setFormData({
        nome: "",
        cpf: "",
        telefone: "",
        endereco: "",
      });
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar pessoa física.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Pessoa Física</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CadastroPessoaFisica;
