import "./style/cadastro.css";
import Botao from "../componentes/Botao";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Titulo from "../componentes/Titulo";
import { Icon } from "@iconify/react";


function Cadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const navigate = useNavigate()

  const cadastrar = () => {
    navigate("../login");
  }

  return (
    <div className="cadastro">
      <Titulo id="cadastroo" titulo="KELP" />

      <div className="fundo-cadastro">
        <h2 className="titulo-cadastro">Cadastrar</h2>

        <div className="campo-cadastro">
          <span><Icon icon="mdi:rename"></Icon></span>
          <input placeholder="Seu nome" type="text" />
        </div>

        <div className="campo-cadastro">
          <span><Icon icon="ic:baseline-email"></Icon></span>
          <input placeholder="Seu email" type="email" />
        </div>

        <div className="campo-cadastro">
          <span><Icon icon="material-symbols:key"></Icon></span>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
          />

          <span
            style={{ cursor: "pointer" }}
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "🚫" : <Icon icon="iconoir:eye"></Icon>}
          </span>
        </div>

        <div className="campo-cadastro">
          <span><Icon icon="material-symbols:key"></Icon></span>
          <input
            type={mostrarConfirmar ? "text" : "password"}
            placeholder="Confirmar senha"
          />

          <span
            style={{ cursor: "pointer" }}
            onClick={() => setMostrarConfirmar(!mostrarConfirmar)}
          >
            {mostrarConfirmar ? "🚫" : <Icon icon="iconoir:eye"></Icon>}
          </span>
        </div>
        <div onClick={cadastrar} className="fazer-cadastro">
          <Botao nome="Cadastrar" />
        </div>

        <p style={{ marginTop: "120px" }}>
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
