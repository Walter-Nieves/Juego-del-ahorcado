import { useEffect, useState } from "react"
import "../styles/App.css"
import Ahorcado from "./Ahorcado.jsx"
import WordContainer from "./WordContainer.jsx"
import Config from "./config.jsx"
import Menu from "./Menu.jsx"




function App() {

  const [caseConfig, setCaseConfig] = useState("");

  useEffect(() => {
    console.log(caseConfig);

  }, [caseConfig]

  );

  return (
    <div className="App">
      <Menu />
      <Ahorcado />
      <WordContainer configApp={caseConfig} />
      <Config mensajero={setCaseConfig} />

    </div>
  )
}

export default App