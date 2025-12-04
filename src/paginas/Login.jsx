import "./style/login.css";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../componentes/Botao";
import { useState } from "react";
import Titulo from "../componentes/Titulo";
import { Icon } from "@iconify/react";

function Login() {
  const navigate = useNavigate();

  // Estados dos inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Controle de mostrar senha
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function fazerLogin() {
    // Aqui você coloca validação ou autenticação depois
    navigate("../eventos"); // <- troca para a tela que você quiser
  }

  return (
    <div className="login">
        <Titulo id="loginn" titulo="KELP" />
        
      <div className="fundo-login">
        <h2 className="titulo-login">Login</h2>

        <label className="login-label">E-mail</label>
        <div className="campo-login">
          <span className="icone-login"><Icon icon="ic:baseline-email"></Icon></span>
          <input
            type="email"
            placeholder="anonimo_misterio@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label className="login-label">Senha</label>
        <div className="campo-login">
          <span className="icone-login"><Icon icon="material-symbols:key"></Icon></span>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {/* ícone de mostrar senha */}
          <span
            className="icone-login"
            style={{ cursor: "pointer" }}
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "🚫" : <Icon icon="iconoir:eye"></Icon>}
          </span>
        </div>
        <div onClick={fazerLogin} className="botoes-login">
        <Botao nome="Login" />
        </div>

        <p className="texto-login">
          Não tem conta? <Link to="/cadastrar">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
