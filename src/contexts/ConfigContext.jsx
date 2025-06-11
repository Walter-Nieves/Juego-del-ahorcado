

import { createContext, useState, useRef } from "react"
import GanarPerder from "../components/GanarPerder.jsx";

export const ConfigContext = createContext();


function ConfigContextComponent({ children }) {


  const [palabra, setPalabra] = useState("")
  const [letras, setLetras] = useState("");
  const [banco, setBanco] = useState(0);

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
    <ConfigContext.Provider value={{ palabra, setPalabra, letras, setLetras, banco, bancoHandler,setBanco }} >
      {children}
      <GanarPerder/>
      <audio ref={refAudio} src="/audio/bone.mp3"></audio>
    </ConfigContext.Provider>
  )
}

export default ConfigContextComponent