//traemos el reemplazo de id
import { useContext, useRef, useEffect } from "react";
import { ConfigContext } from "../contexts/ConfigContext";

const estilo = {

    centrar: { display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" },

    colores: { backgroundColor: "black", border: "2px solid white", borderRadius: "5px", color: "white" },

}



//creamos un componente que recibe tecleo y debe tener hijos
function Tecla({ children, tecleo }) {

    const { letras, setLetras, palabra, bancoHandler } = useContext(ConfigContext);

    useEffect(() => {
        if (!letras) {
            reiniciarTecla();
            refBoton.current.style.backgroundColor = "black"
            refBoton.current.style.color = "white"
            refBoton.current.style.border = "2px solid white"
        }
    }, [letras]);


    // creamos una referencia a un boton
    const refBoton = useRef(null);

    const manejadorHover = () => {
        if (refBoton.current.style.backgroundColor == "darkblue") return;
        refBoton.current.style.backgroundColor = "white"
        refBoton.current.style.color = "black"
        refBoton.current.style.border = "2px solid black"
    }
    const manejadorExit = () => {
        if (refBoton.current.style.backgroundColor == "darkblue") return;
        refBoton.current.style.backgroundColor = "black"
        refBoton.current.style.color = "white"
        refBoton.current.style.border = "2px solid white"


    }

    //funcion que llamaremos dentro del componente
    const manejadorBoton = () => {
        //llamamos al prop tecleo y le mandamos como parametros los hijos
        // tecleo(children);
        setLetras(letras + children)
        if (!palabra.toLowerCase().includes(String(children).toLowerCase())) {
            bancoHandler();
        }
        //desactivamos el boton The setAttribute method in React is used to directly modify attributes of DOM elements
        refBoton.current.setAttribute("disabled", true);
        refBoton.current.style.backgroundColor = "darkblue"
        refBoton.current.style.color = "white"

    }

    const reiniciarTecla = () => {
        refBoton.current.removeAttribute("disabled");
    }

    return (
        <button type="button" ref={refBoton} style={
            {
                ...estilo.centrar,
                ...estilo.colores,
                gridArea: children.toLowerCase()
            }} onClick={manejadorBoton}
            onMouseEnter={manejadorHover}
            onMouseLeave={manejadorExit}
        >{children}</button>
    )
}

export default Tecla