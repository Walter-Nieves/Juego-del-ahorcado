import { useEffect, useState } from "react";
import "../styles/Word.css"

// const letras = "elpa";
// const palabra = "mas cansado que el putas";
//comentario para git



function Word({ configWordContainer }) {

    const [juego, setJuego] = useState([]);
    const espacioInvisible = "\u00A0";
    const [letras, setLetras] = useState("NOTUERILDQBA");
    const [palabra, setPalabra] = useState("No Todo Lo Que Brilla Es Oro")

    useEffect(() => {
        const estructura = palabra.split("").map((letra) => {
            return {
                letra: letra,
                conseguida: !(/[a-zA-Z]/.test(letra)) || letra === " " || letras.toLowerCase().includes(letra.toLowerCase())
            };
        });
        setJuego(estructura);
        console.log(configWordContainer);
    }, [configWordContainer]);

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