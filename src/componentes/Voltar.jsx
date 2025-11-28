import { Icon } from "@iconify/react";
import { hover } from "@testing-library/user-event/dist/hover";
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