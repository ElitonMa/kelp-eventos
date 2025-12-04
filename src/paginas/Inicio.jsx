import Botao from "../componentes/Botao";
import Titulo from "../componentes/Titulo";
import "./style/inicio.css"
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Inicio() {
    return (
        <>
            {/* Fonte do titulo */}
            <div className="fundo-inicio">
                <div className="icone">
                    <Icon icon="qlementine-icons:user-16" color="white" fontSize={180} />
                </div>
                <div className="titulo">
                    <Titulo titulo="KELP"   id="titulo" />
                </div>
                <div className="botoes">
                    <Link to="/login">
                        <Botao nome="Login" />
                    </Link>
                    <p></p>
                    <Link to="/cadastrar" >
                        <Botao nome="Cadastro" />
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default Inicio;