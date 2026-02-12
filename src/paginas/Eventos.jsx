import "./style/eventos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventosBox from "../componentes/EventosBox";
import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from "@iconify/react";

function Eventos() {
  return (
    <div className="evento">
      <Dropdown drop="down-centered">
        <Dropdown.Toggle variant="success" id="dropdown">
          <Icon icon="material-symbols:list"></Icon>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="../adicionarEvento">Adicionar evento</Dropdown.Item>
          <Dropdown.Item href="../">Sair</Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>
      <div className="fundo-eventos-app">
        <div className="fundo-eventos">
          <div className="informacoes-eventos">
            <span>
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/R.+Assis+Brasil,+20-D+-+Centro,+Chapec%C3%B3+-+SC,+89805-101/@-27.103319,-52.6065465,18.5z/data=!4m6!3m5!1s0x94e4b6bcc4e5e7c7:0x610303cfd3aab911!8m2!3d-27.1033078!4d-52.6057224!16s%2Fg%2F11rg66hjyf?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                <Icon icon="mdi:location" color="red" fontSize={20}></Icon>Rua Assis Brasil, nº 20 D, Bairro Centro, Chapecó - SC{" "}
              </a>
            </span>
            <br />
            <span><Icon icon="ic:baseline-phone" color="red" fontSize={20}></Icon>(49) 9928 - 3019 </span>
          </div>
          <div className="eventos">
            {/* Componente evento aqui!! */}
            <EventosBox
              data="18 SET."
              titulo="10° Encontro das Orquestras"
              horario="20:20 - 22:20"
              preco="50,00"
            />
            <EventosBox
              data="26 SET."
              titulo="Orquestra Sinfônica ONU."
              horario="18:50 - 20:00"
              preco="35,00"
            />
            <EventosBox
              data="30 SET."
              titulo="Festival dança"
              horario="20:00 - 22:20"
              preco="35,00"
            />
            <EventosBox
              data="15 SET."
              titulo="Ginástica rítmica"
              horario="19:30 - 21:30"
              preco="30,00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventos;
