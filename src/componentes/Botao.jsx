import { Icon } from "@iconify/react";

function Botao(props) {
  return (
    <div>
      <button id={props.id} className={props.className}>
        <Icon icon={props.icone} inline={props.iconeInline} fontSize={props.iconeSize} width={props.iconeWidth} height={props.iconeHeight}></Icon> 
        <span>
          {props.nome}
        </span>
      </button>
    </div>
  );
}

export default Botao;