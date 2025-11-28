import { Link } from "react-router-dom";
import Botao from "../componentes/Botao";

function Cadastro() {
  return (
    <div className="cadastro">
      <h1>Bem-vindo ao protótipo do cadastro!</h1>
      <span>Atualmente não da pra fazer nada</span>

      {/* Botão pra ir pro login após cadastro */}
      <Link to="/login">
        <Botao nome="Cadastrar" />  
      </Link>
    </div>
  );
}

export default Cadastro;
