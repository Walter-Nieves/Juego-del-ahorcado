import { useEffect, useState } from "react";
import "../styles/Word.css"

// const letras = "elpa";
// const palabra = "mas cansado que el putas";
//comentario para git



function Word() {

    const [juego, setJuego] = useState([]);
    const espacioInvisible = "\u00A0";
    const [letras,setLetras] = useState("ela");
    const [palabra,setPalabra] = useState("no todo lo que brilla es oro")

    useEffect(() => {
        const estructura = palabra.split("").map((letra) => {
            return {
                letra: letra.toLowerCase(),
                conseguida: letra === " " || letras.includes(letra.toLowerCase())
            };
        });
        setJuego(estructura);
        console.log(estructura);
    }, [letras,palabra]);

    return (
        <ul className="ul">
            {juego.map((objeto, index) => {
                if (objeto.letra === " ") {
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