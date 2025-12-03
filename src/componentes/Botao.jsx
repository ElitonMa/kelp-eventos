import { Icon } from "@iconify/react";

function Botao(props) {
  return (
    <div>
      <button>
        <Icon icon={props.icone} inline={props.iconeInline} fontSize={props.iconeSize} width={props.iconeWidth} height={props.iconeHeight}></Icon> 
        <span>
          {props.nome}
        </span>
      </button>
    </div>
  );
}

export default Botao;
