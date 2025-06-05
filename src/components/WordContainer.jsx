import "../styles/WordContainer.css"
import TecladoAhorcado from "./TecladoAhorcado.jsx"
import TeclaAhorcado from "./TeclaAhorcado.jsx"
import Word from "./Word.jsx"
import { useEffect } from "react"



function WordContainer({configApp}) {

  useEffect(()=>{
    console.log(configApp);
  },[configApp]);

  return (
    <div className="WordContainer">
      <Word configWordContainer={configApp} />
      <TecladoAhorcado/>
      {/* <TeclaAhorcado tecleo ={(letra)=> alert("Estas escribiendo " + letra)}>A</TeclaAhorcado> */}


    </div>
  )
}

export default WordContainer