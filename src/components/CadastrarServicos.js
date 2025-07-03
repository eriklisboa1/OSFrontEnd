import React, { useState, useEffect } from "react";
import axios from "axios";

function CadastrarServicos() {
  const [formData, setFormData] = useState({
    nome: "",
    duracao: "",
    valor: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [servicos, setServicos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchServicos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/servicos");
      setServicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    }
  };

  useEffect(() => {
    fetchServicos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/servicos", formData);
      setMensagem("Serviço cadastrado com sucesso!");
      setFormData({ nome: "", duracao: "", valor: "" });
      fetchServicos();  // Atualizar lista após cadastro
    } catch (error) {
      setMensagem("Erro ao cadastrar serviço.");
    }
  };

  return (
    <div className="cadastrar-servicos">
      <h1>Cadastrar Serviços</h1>
      {mensagem && <p className="mensagem">{mensagem}</p>}
      <form onSubmit={handleSubmit} className="form-cadastrar-servicos">
        <div className="form-group">
          <label htmlFor="nome">Nome do Serviço:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duracao">Duração (em horas):</label>
          <input
            type="number"
            id="duracao"
            name="duracao"
            value={formData.duracao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="valor">Valor Aproximado (R$):</label>
          <input
            type="number"
            step="0.01"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>

      <h2>Serviços Cadastrados</h2>
      <table className="servicos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Duração (h)</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody >
          {servicos.map((servico) => (
            <tr key={servico.id}>
              <td>{servico.id}</td>
              <td>{servico.nome}</td>
              <td>{servico.duracao}</td>
              <td>{servico.valor.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CadastrarServicos;
