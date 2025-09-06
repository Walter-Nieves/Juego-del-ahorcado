import { useContext, useEffect, useState } from "react";
import "../styles/Word.css"
import { ConfigContext } from "../contexts/ConfigContext";

// const letras = "elpa";
// const palabra = "mas cansado que el putas";
//comentario para git



function Word({ configWordContainer }) {

    const { palabra, letras,setEstadoJuego } = useContext(ConfigContext);
    const [juego, setJuego] = useState([]);
    const espacioInvisible = "\u00A0";

    useEffect(() => {
        const estructura = palabra.split("").map((letra) => {
            return {
                letra: letra,
                conseguida: !(/[a-zA-Z]/.test(letra)) || letra === " " || letras.toLowerCase().includes(letra.toLowerCase())
            };
        });


        if (estructura.length>0 && estructura.every(letra => letra.conseguida)) {
            setEstadoJuego("ganar");
        }

        setJuego(estructura);
        console.log(configWordContainer);
    }, [configWordContainer, letras, palabra]);

    return (
        <ul className="ul" style={{
            textTransform: configWordContainer == "AA" ? "uppercase"
                : configWordContainer == "aa" ? "lowercase" : "none"
        }}>
            {juego.map((objeto, index) => {
                if (objeto.letra === " ") {
                    /[a-zA-Z]/.test(objeto.letra)
                    return <li className="li espacio" key={index}></li>;
                }
                return (
                    <li className="li" key={index}>
                        <span className={`celda ${objeto.conseguida ? "visible" : "oculta"}`}>
                            {objeto.conseguida ? objeto.letra : espacioInvisible /* espacio no rompible */}
                        </span>
                    </li>
                );
            })}
        </ul>
    )
}



export default Word