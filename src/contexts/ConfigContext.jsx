
import { createContext, useState, useRef, useReducer } from "react"
import GanarPerder from "../components/GanarPerder.jsx";


export const ConfigContext = createContext();

const menuViewInicial = {
  vistaActual: 0,
  nuevoJuego: true, // vista 0
  nuevaFrase: false, // vista 1
  pausa: false // vista 2

}

function menuViewHandler(estado, accion) {

  const nuevoEstado = { ...estado }

  switch (accion) {
    case 0:
      nuevoEstado.vistaActual = 0;
      nuevoEstado.nuevoJuego = true;
      nuevoEstado.nuevaFrase = false;
      nuevoEstado.pausa = false;
      return nuevoEstado;
    case 1:
      nuevoEstado.vistaActual = 1;
      nuevoEstado.nuevoJuego = false;
      nuevoEstado.nuevaFrase = true;
      nuevoEstado.pausa = false;
      return nuevoEstado;
    case 2:
      nuevoEstado.vistaActual = 2;
      nuevoEstado.nuevoJuego = false;
      nuevoEstado.nuevaFrase = false;
      nuevoEstado.pausa = true;
      return nuevoEstado;
    case 3:

      return nuevoEstado;

    default:
      return nuevoEstado;
  }
}


function ConfigContextComponent({ children }) {

  const [palabra, setPalabra] = useState("")
  const [letras, setLetras] = useState("");
  const [banco, setBanco] = useState(0);
  const [estadoJuego, setEstadoJuego] = useState("");
  const [menuView, setMenuView] = useReducer(menuViewHandler, menuViewInicial);
   const [menu, setMenu] = useState(true);

  const refAudio = useRef();

  const bancoHandler = () => {
    if (banco < 36) {
      setBanco(banco + 4);

      if (banco >= 32) {
        refAudio.current.currentTime = 0.6;
        refAudio.current.play();
        setEstadoJuego("perder");
      }
    }
  }
  
  return (
    <ConfigContext.Provider value={{ palabra, setPalabra, letras, setLetras, banco, bancoHandler, setBanco, estadoJuego, setEstadoJuego, menuView, setMenuView,menu, setMenu }} >
      {children}
      {estadoJuego && <GanarPerder estado={estadoJuego} />}
      <audio ref={refAudio} src="/audio/bone.mp3"></audio>
    </ConfigContext.Provider>
  )

}

export default ConfigContextComponent

