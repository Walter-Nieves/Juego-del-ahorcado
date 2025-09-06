
import "/src/styles/GanarPerder.css"
import { ConfigContext } from "/src/contexts/ConfigContext.jsx"
import { useContext, useEffect, useRef, useState } from "react"

function GanarPerder({ estado }) {

    const [animar, setAnimar] = useState(false);
    const refDiv = useRef();

    useEffect(() => {
        refDiv.current.classList.add("animar-fondo");
        setTimeout(() => {
            setAnimar(true);
        }, 2000);


    }, []);

    const { estadoJuego, setEstadoJuego, setBanco, setLetras, setPalabra, setMenuView, setMenu, palabra } = useContext(ConfigContext);

    if (!estadoJuego) return null;//si aún no ha ganado o perdido no mostrar nada

    const reiniciar = () => {
        setBanco(0);
        setLetras("");
        setPalabra("");
        setMenu(true);
        setMenuView(1);
        animarLuz();
    };
    
    const salir = () => {
        setBanco(0);
        setLetras("");
        setPalabra("");
        setMenuView(0);
        setMenu(true);
        animarLuz();
    };

    const animarLuz = () => {
        refDiv.current.classList.add("iluminar-fondo");
        refDiv.current.classList.remove("animar-fondo");
        setTimeout(() => {
            refDiv.current.classList.remove("iluminar-fondo");
            setEstadoJuego("")
        }, 2000);

    }

    return (
        <div className="GanarPerder" ref={refDiv}>
            <div className="anim-word">
                {estado === "ganar" ? (<span className="ganar">Fuiste S<b>A</b>lvado</span>) : <> (<span className="perder">Fuiste <b>A</b>horcado</span><span className="perderFrase">La frase o palabra para adivinar era {palabra}</span> )</>}
            </div>
            <div className="btns">
                <button type="button" onClick={salir} >Salir</button>
                <button type="button" onClick={reiniciar} >Reiniciar</button>
            </div>
        </div>
    )
}
export default GanarPerder