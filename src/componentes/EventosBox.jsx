import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function EventosBox(props) {

  const valor = props.preco;
  const navigate = useNavigate();
    const link = () => {
        navigate('../pagamento/' + props.preco )
    }

  return (
    <div className="EventosBox" style={{cursor:"pointer", userSelect:"none"}} onClick={link}>
      <span className="data-eventosBox">{props.data}</span>
      <br />
      <span className="titulo-eventosBox">{props.titulo}</span>
      <br />
      <span className="horario-eventosBox"><Icon icon="mdi:clock" color="black  "></Icon>{props.horario}</span>
      <br />
      <span className="preco-eventosBox"><Icon icon="ant-design:tag-filled" color="black"></Icon>R${props.preco}</span>
    </div>
  );
}

export default EventosBox;
