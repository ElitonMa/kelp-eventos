import { Link } from "react-router-dom";
import Botao from "../componentes/Botao";
import Titulo from "../componentes/Titulo";
import "./style/login.css";

function Login() {
    return (
        <div className="login">
            <Titulo titulo="KELP" />

            {/* Botão para ir para eventos */}
            <Link to="/eventos">
                <Botao nome="Concluir" />
            </Link>
        </div>
    )
}

export default Login;