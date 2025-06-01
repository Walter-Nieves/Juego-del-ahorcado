import { useState } from "react";


const estilo ={
  display : "flex",
  justifyContent: "center",
  width: "100vw",
  alignItems: "center",
  flexDirection: "column"
}

const button={
  borderRadius:"10px",
  color:"green",
  backgroundColor:"black",
  marginBottom:"10px"
}




function Contador() {

  const [contador, setContador] = useState(0);

  const handlerSumar = ()=> setContador(contador+1)
  const handlerRestar = ()=> setContador(contador-1)
  const handlerMultiplicar = ()=> setContador(contador*2)
  const handlerBorrar = ()=> setContador(0)
  
  return (
    <div style={estilo} >
      <span >{contador}</span>
      <button style={button} onClick={handlerSumar} >Dar click para sumar</button>
      <button style={button} onClick={handlerMultiplicar} >Dar click para multiplicar</button>
      <button style={button} onClick={handlerRestar} >Dar click para restar</button>
      <button style={button} onClick={handlerBorrar} >Dar click para borrar</button>
     



    </div>
  )
}

export default Contador