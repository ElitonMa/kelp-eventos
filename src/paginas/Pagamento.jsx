import "./style/pagamento.css"
import { useParams } from 'react-router-dom';
import Botao from "../componentes/Botao";
import { useNavigate } from "react-router-dom";

function Pagamento(props) {
    const { valorP } = useParams();

    const navigate = useNavigate();
    
    const salvar = () => {
        navigate("../pagamentoconcluido")
    }

    return (
        <div className="fundo">
            <div className="container-texto">
                <h3>Selecione a forma de pagamento</h3>
                <span> Total a pagar: R${valorP} </span>
            </div>
            <div className="formas-pagamento">
                 <Botao nome="Pagar agora (Online)" icone="ion:card" iconeSize='38' iconeInline="true"/>
                <Botao nome="Pagar com dinheiro" iconeSize='40' iconeInline="true" icone="tdesign:money-filled"/>
                <Botao nome="Pagar com máquina móvel" iconeWidth="28" iconeHeight="46" iconeInline="true" icone="fontisto:shopping-pos-machine" />
            </div>
            <div className="salvar" onClick={salvar}> 
                <Botao nome="Salvar" />
            </div>
        </div>
    )
}

export default Pagamento;