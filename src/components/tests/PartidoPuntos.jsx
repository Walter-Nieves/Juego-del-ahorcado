import  { useReducer } from 'react'


function puntoHandler(state, accion) {

     const estado = { ...state };


  if (accion.type === 'junior') {
    return { ...estado, junior: estado.junior + 1 };
  } else if (accion.type === 'verde') {
    return { ...estado, verde: estado.verde + 1 };
  } else {
    return estado; 
  }
}

function PartidoPuntos() {
  const [puntos, setPuntos] = useReducer(puntoHandler, { junior: 0, verde: 0 });

  return (
    <div>
      <h2>Junior: {puntos.junior}</h2>
      <h2>Unión Magdalena: {puntos.verde}</h2>
      <button style={{margin:"20px"}} onClick={() => setPuntos({ type: 'junior' })}>Junior</button>
      <button style={{margin:"20px"}} onClick={() => setPuntos({ type: 'verde' })}>Unión Magdalena</button>
    </div>
  )
}




export default PartidoPuntos