function EventosBox(props) {
  return (
    <div className="EventosBox">
      <span className="data-eventosBox">{props.data}</span>
      <br />
      <span className="titulo-eventosBox">{props.titulo}</span>
      <br />
      <span className="horario-eventosBox">⏱️{props.horario}</span>
      <br />
      <span className="preco-eventosBox">🏷️R${props.preco}</span>
    </div>
  );
}

export default EventosBox;
