import { useContext,useRef } from "react"
import "/src/styles/Menu.css"
import { ConfigContext } from "../contexts/ConfigContext.jsx";

function Menu() {

    const refFrase = useRef();

    const { setPalabra, setBanco, setLetras,menuView,setMenuView,menu, setMenu } = useContext(ConfigContext);

    const fraseHandler = (e) => {
        e.preventDefault();
        if (refFrase.current.value.trim() == "") {
            return alert("Debes llenar este campo correctamente")
        }
        if (!/[a-zA-Z]/.test(refFrase.current.value)) {
            return alert("Debes llenar este campo correctamente")
        }

        const frase = refFrase.current.value.trim().replaceAll("<", "&#60;").replaceAll(">", "&#62;");
        setBanco(0);
        setMenuView(2);
        setMenu(false);
        setPalabra(frase);
        setLetras("");
    }

    return (
        <div className='Menu' style={{
            backgroundColor: menu ? "rgba(255,255,255,0.7)" : "transparent", backdropFilter: `blur(${menu ? 5 : 0}px)`,
            width: `${menu ? 100 : 0}%`
        }}>

            {menuView.pausa && !menu && <img src="public/icons/list (1).svg" onClick={() => setMenu(!menu)} alt="Menu" />}
            {menu && <>
                <p>El <span>A</span>horcado</p>
                {menuView.nuevoJuego && <button onClick={() => setMenuView(1)} >Nuevo juego</button>}
                {menuView.nuevaFrase && <form onSubmit={fraseHandler}>
                    <textarea placeholder='Escribe aqui tu frase o palabra secreta' ref={refFrase} required></textarea>
                    <div className="separador">
                        <button type='button' onClick={() => setMenuView(0)} >Cancelar</button>
                        <button type='submit' >Empezar</button>
                    </div>
                </form>}
                {menuView.pausa && <>
                    <button onClick={() => setMenu(!menu)} >Continuar</button>

                    <button onClick={() => {
                        const confirmar = window.confirm("¿Estas seguro que deseas reiniciar el juego?");
                        if (confirmar) {
                            setMenuView(1);
                            setLetras("")
                            setBanco(0);
                            setPalabra("")
                        }
                    }} >Reiniciar</button>

                    <button onClick={() => {
                        const confirmar = window.confirm("¿Estas seguro que deseas salir del juego?");
                        if (confirmar) {
                            setMenuView(0);
                            setLetras("")
                            setBanco(0);
                            setPalabra("")
                        }
                    }} >Salir</button>
                </>}
            </>}
        </div>
    )
}

export default Menu