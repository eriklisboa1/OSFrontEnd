import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SelecionarTipoCadastro from "./components/SelecionarTipoCadastro";
import CadastroPessoaFisica from "./components/CadastroPessoaFisica";
import CadastroPessoaJuridica from "./components/CadastroPessoaJuridica";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/selecionar-cadastro" element={<SelecionarTipoCadastro />} />
        <Route path="/cadastro-pessoa-fisica" element={<CadastroPessoaFisica />} />
        <Route path="/cadastro-pessoa-juridica" element={<CadastroPessoaJuridica />} />
      </Routes>
    </Router>
  );
}

export default App;
