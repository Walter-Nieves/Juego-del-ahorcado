import { useRef, useState } from "react"

function Foco2() {

    const [light,setLight] = useState(false);

    const referenciaFoto = useRef();
    const referenciaBoton = useRef();

    const lightHandler = ()=>{
         console.log(referenciaFoto);
         console.log(referenciaBoton);
         if(light){
            referenciaFoto.current.src = "/public/imagenes/focooff.png"
            referenciaBoton.current.textContent = "Encender"
         }else{
             referenciaFoto.current.src = "/public/imagenes/focoon.png"
              referenciaBoton.current.textContent = "Apagar"
         };
        // alert(String(light));
        setLight(!light);

    };


  return (

   
        <div style={{display:"flex", flexDirection:"column"}}>
            <button ref={referenciaBoton}  onClick={lightHandler} >Encender</button>
            <img ref={referenciaFoto} src="/public/imagenes/focooff.png" alt="Foto" />
        </div>
  

  )
}

export default Foco2