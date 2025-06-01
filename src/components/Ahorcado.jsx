import { useRef, useState } from "react"
import "../styles/Ahorcado.css"


function Ahorcado() {
    const [banco, setBanco] = useState(0);
    const refBanco = useRef();
    const refAudio = useRef();

    const bancoHandler = () => {
        if (banco < 36) {
            setBanco(banco + 4);
        }
        if (banco >= 32) {
            refAudio.current.currentTime = 0.6;
            refAudio.current.play();

        }
    }


    return (
        <>
            <div className="Ahorcado">Ahorcado
                <div className="personaje">
                    <div className="foto"></div>
                    <img style={{ right: `calc(20% + ${banco}%)` }} ref={refBanco} className="banco" src="/imagenes/chair.png" alt="Banco" />
                </div>
                <audio ref={refAudio} src="/audio/bone.mp3"></audio>
            </div>
            {/* <button onClick={bancoHandler} >Rodar{banco}</button> */}
        </>
    )
}

export default Ahorcado