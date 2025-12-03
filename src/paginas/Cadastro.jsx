import { Link } from "react-router-dom";
import Botao from "../componentes/Botao";
import "./style/cadastro.css";

function Cadastro() {
  return (
    <div className="fundo">

      <div className="cadastro">
        
        {/* Botão pra ir pro login após cadastro */}
        <Link to="/login">
          <Botao nome="Cadastrar" />
        </Link>
      </div>
    </div>
  );
}

export default Cadastro;
