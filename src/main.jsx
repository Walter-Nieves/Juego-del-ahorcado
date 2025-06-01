import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Contador from './components/tests/Contador.jsx'
import Teclado from './components/tests/Teclado.jsx'
import Focos  from './components/tests/Focos.jsx'
import Mayusculainador from "./components/tests/Mayusculainador.jsx"
import Formulario from './components/tests/Formulario.jsx'
import App from "./components/App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Contador/> */}
    {/* <Teclado/> */}
    {/* <Focos/> */}
    {/* <Mayusculainador/> */}
    {/* <Formulario/> */}
    <App/>
  </StrictMode>,
)
