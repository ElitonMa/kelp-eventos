import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Style.css";
import Botao from "./componentes/Botao";
import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Inicio from "./paginas/Inicio";
import { Icon } from "@iconify/react";
import Voltar from "./componentes/Voltar";
import Eventos from "./paginas/Eventos";


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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
