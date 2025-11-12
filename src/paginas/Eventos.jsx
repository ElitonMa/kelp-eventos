import "./style/eventos.css";
import EventosBox from "../componentes/EventosBox";

function Eventos() {
  return (
    <div className="evento">
      <div className="fundo-eventos">
        <div className="informacoes-eventos">
          <span>
            {" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/R.+Assis+Brasil,+20-D+-+Centro,+Chapec%C3%B3+-+SC,+89805-101/@-27.103319,-52.6065465,18.5z/data=!4m6!3m5!1s0x94e4b6bcc4e5e7c7:0x610303cfd3aab911!8m2!3d-27.1033078!4d-52.6057224!16s%2Fg%2F11rg66hjyf?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
            >
              📍Rua Assis Brasil, nº 20 D, Bairro Centro, Chapecó - SC{" "}
            </a>
          </span>
          <br />
          <span>📞(49) xxxx - xxxx</span>
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
            data="18 SET."
            titulo="10° Encontro das Orquestras"
            horario="20:20 - 22:20"
            preco="50,00"
          />
           <EventosBox
            data="18 SET."
            titulo="10° Encontro das Orquestras"
            horario="20:20 - 22:20"
            preco="50,00"
          />
           <EventosBox
            data="18 SET."
            titulo="10° Encontro das Orquestras"
            horario="20:20 - 22:20"
            preco="50,00"
          />
           <EventosBox
            data="18 SET."
            titulo="10° Encontro das Orquestras"
            horario="20:20 - 22:20"
            preco="50,00"
          />
           <EventosBox 
            data="18 SET."
            titulo="10° Encontro das Orquestras"
            horario="20:20 - 22:20"
            preco="50,00"
          />
        </div>
      </div>
    </div>
  );
}

export default Eventos;
