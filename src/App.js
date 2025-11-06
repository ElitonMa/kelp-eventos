import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Style.css";
import Botao from "./componentes/Botao";
import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Eventos from "./paginas/Eventos";

function App() {
  return (
    <Router>
      <div className="principal">
        <div className="fundo-app">
       
          {/* Navegação cadastro,login etc...*/}
          <nav>
            <Link to="/cadastrar"> <Botao nome="Cadastrar" /> </Link>
            <Link to="/login"> <Botao nome="Login" /> </Link>
            <Link to="/"> <Botao nome="Eventos" /> </Link>
          </nav>

          {/* Para os link ir para os lugares certos */}
          <Routes >
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Eventos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
