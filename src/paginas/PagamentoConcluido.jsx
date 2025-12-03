import "./style/pagamentoConcluido.css";
import image from "./imagens/tl.webp";

function PagamentoConcluido() {
    return (
        <div className="fundoC">
            <div className="Concluido">
                <h1> PAGAMENTO CONCLUÍDO! </h1>
                <img src={image} className="check" />
            </div>
        </div>

    );
}

export default PagamentoConcluido;