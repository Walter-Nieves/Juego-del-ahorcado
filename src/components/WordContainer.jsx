import "../styles/WordContainer.css"
import TecladoAhorcado from "./TecladoAhorcado.jsx"
import TeclaAhorcado from "./TeclaAhorcado.jsx"
import Word from "./Word.jsx"



function WordContainer() {
  return (
    <div className="WordContainer">
      <Word/>
      <TecladoAhorcado/>
      {/* <TeclaAhorcado tecleo ={(letra)=> alert("Estas escribiendo " + letra)}>A</TeclaAhorcado> */}


    </div>
  )
}

export default WordContainer