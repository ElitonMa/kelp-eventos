import Botao from "../componentes/Botao"
import "./style/adicionarEvento.css"
import Titulo from "../componentes/Titulo"
import { useNavigate } from "react-router-dom"

function AdicionarEvento() {
    const navigate = useNavigate();

    const adicionar = () => {
        navigate("../eventos");
    }
    return (
        <>
            <div className="titulo-add">
                <Titulo titulo="Adicione um evento!"    id="titulo-add" />
            </div>

            <div className="fundo-adicionar">
                <form >
                    <label htmlFor="titulo">Titulo</label>
                    <br />
                    <input type="text" name="titulo" />
                    <br />
                    <label htmlFor="data">Data</label>
                    <br />
                    <input type="date" name="data" />
                    <br />
                    <label htmlFor="Horario">Horário</label>
                    <br />
                    <input type="text" name="horario" />
                    <br />
                    <label htmlFor="Preco">Preço</label>
                    <br />
                    <input type="text" name="preco" />
                </form>
                <div onClick={adicionar} >
                <Botao nome="Adicionar" id="botao-add" />
                </div>
            </div>
        </>
    )
}

export default AdicionarEvento  