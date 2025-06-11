import { useContext, useRef } from "react"
import "../styles/Ahorcado.css"
import { ConfigContext } from "/src/contexts/ConfigContext.jsx"


function Ahorcado() {

    const refBanco = useRef();
    const { banco } = useContext(ConfigContext);


    return (
        <>
            <div className="Ahorcado">
                <div className="personaje">
                    <div className="foto"></div>
                    <img style={{ right: `calc(20% + ${banco}%)` }} ref={refBanco} className="banco" src="/imagenes/chair.png" alt="Banco" />
                </div>

            </div>
            {/* <button onClick={bancoHandler} >Rodar{banco}</button> */}
        </>
    )
}

export default Ahorcado