import "./style/pagamentoConcluido.css";
import image from "./imagens/Checkmark.webp";
import Botao from "../componentes/Botao";
import { useNavigate } from "react-router-dom";

function PagamentoConcluido() {
    const navigate = useNavigate();

    const voltar = () => {
        navigate("../eventos")
    }

    return (
        <div className="fundoC">
            <div className="Concluido">
                <h1> PAGAMENTO CONCLUÍDO! </h1>
                <img src={image} className="check" />
                <div onClick={voltar}>
                    <Botao nome="Ok!" id="finalizado"/>
                </div>
            </div>
        </div>

    );
}

export default PagamentoConcluido;