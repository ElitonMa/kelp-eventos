import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function Voltar () {
    const navigate = useNavigate();
  
    const voltar = () => {
    navigate(-1);
    }

    return (
        <>
        <Icon icon="carbon:return" onClick={voltar} fontSize={35} color="white" className="voltar-icone"/>
        </>
    );
}

export default Voltar;