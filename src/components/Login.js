import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      localStorage.setItem("userRole", response.data.role);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data || "Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  const handleCadastro = () => {
    navigate("/selecionar-cadastro");
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="/lisboaOS.png" alt="Logo" className="logo-img" />
      </div>
      <br />
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Entrar</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {/* Novo botão de cadastro */}
      <br />
      <button onClick={handleCadastro} style={{ marginTop: "10px", backgroundColor: "#28a745" }}>
        Cadastrar-se
      </button>
    </div>
  );
}

export default Login;
