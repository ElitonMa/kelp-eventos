import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Style.css";
import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Inicio from "./paginas/Inicio";
import Voltar from "./componentes/Voltar";
import Eventos from "./paginas/Eventos";
import Pagamento from "./paginas/Pagamento";
import PagamentoConcluido from "./paginas/PagamentoConcluido";

function App() {
  
 
  return (
    <Router>
      <div className="principal">
        <div className="fundo-app">
          {/* Navegação cadastro,login etc...*/}
          <Voltar />
          {/* Para os link ir para os lugares certos */}
          <Routes >
            <Route path="/" element={<Inicio />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/pagamento/:valorP" element={<Pagamento />} />
            <Route path="/pagamentoConcluido" element={<PagamentoConcluido />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
