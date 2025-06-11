import { useEffect, useState } from "react"
import TeclaAhorcado from "./TeclaAhorcado.jsx";
import "../styles/TecladoAhorcado.css"

// const estilo = {
//     div: { gap: "10px", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" },
//     span: { backgroundColor: "gray", padding: "10px", borderRadius: "10PX", color: "black", minHeight: "24px", width: "100%", maxWidth: "50%" },
//     boton: { width: "40px", aspectRatio: "1", backgroundColor: "darkblue", border: "2px solid white", borderRadius: "5px", color: "white", marginTop: "10px" }
// }

const teclas =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function Teclado (){

    const texthandler = (letra)=>{
        alert(`Presionaste la tecla ${letra}`);
    }

    return(
        <div className="teclado">
            {teclas.map((letra,index)=>{
                return <TeclaAhorcado  key={index}>{letra}</TeclaAhorcado>
            })}
        </div>
    )

}





// function Teclado() {

//     const [palabra, setPalabra] = useState("");


//     //useEffect se ejecuta siempre que se cargue el componenete
//     // useEffect(
//     //     () => {
//     //         setTimeout(() => {
//     //             document.querySelector("span").style.backgroundColor="white";
//     //             // alert("Bienvenido!")
//     //             setTimeout(() => {
//     //                 document.querySelector("span").style.backgroundColor="gray";
//     //             }, 200);
//     //         }, 100);
//     //     },
//     //     [palabra]
//     // );

//     const textHandler = (letra) => {
//         const consulta = /[a-zA-Z]/.test(letra);
//         if (!consulta) {
//             const longitud = palabra.length;
//             const ultimoBorrado = palabra.slice(0, longitud - 1);
//             setPalabra(ultimoBorrado);
//             return;
//         }
//         setPalabra(palabra + letra);
//     }

//     // const textHandlerA = ()=>{
//     //     setPalabra(palabra + "A");
//     // }
//     // const textHandlerB = ()=>{
//     //     setPalabra(palabra + "B");
//     // }
//     // const textHandlerC = ()=>{
//     //     setPalabra(palabra + "C");
//     // }
//     // const textHandlerDelete = ()=>{
//     //     const longitud = palabra.length;
//     //     const ultimoBorrado = palabra.slice(0,longitud-1);
//     //     setPalabra(ultimoBorrado);
//     // }

//     return (
//         <div style={estilo.div}>
//             {/* {<span style={estilo.span}>{palabra}</span>} */}
//             {/* <button style={{...estilo.div,...estilo.boton}} onClick={textHandlerA}>A</button>
//             <button style={{...estilo.div,...estilo.boton}} onClick={textHandlerB}>B</button>
//             <button style={{...estilo.div,...estilo.boton}} onClick={textHandlerC}>C</button>
//             <button style={{...estilo.div,...estilo.boton}} onClick={textHandlerDelete}>&#9003;</button> */}
//             <div className="teclado">

//                 {letras.map((letra,posicion)=>{
                    
//                     return <TeclaAhorcado  tecleo ={textHandler} key={posicion}>{letra}</TeclaAhorcado>
//                 })}
//                 {/* <TeclaAhorcado tecleo={textHandler} >&#9003;</TeclaAhorcado> */}

//                 {/* <Tecla tecleo={textHandler} >A</Tecla>
//                 <Tecla tecleo={textHandler} >B</Tecla>
//                 <Tecla tecleo={textHandler} >C</Tecla>
//                 <Tecla tecleo={textHandler} >D</Tecla>
//                 <Tecla tecleo={textHandler} >E</Tecla>
//                 <Tecla tecleo={textHandler} >F</Tecla>
//                 <Tecla tecleo={textHandler} >G</Tecla>
//                 <Tecla tecleo={textHandler} >H</Tecla>
//                 <Tecla tecleo={textHandler} >I</Tecla>
//                 <Tecla tecleo={textHandler} >J</Tecla>
//                 <Tecla tecleo={textHandler} >K</Tecla>
//                 <Tecla tecleo={textHandler} >L</Tecla>
//                 <Tecla tecleo={textHandler} >M</Tecla>
//                 <Tecla tecleo={textHandler} >N</Tecla>
//                 <Tecla tecleo={textHandler} >O</Tecla>
//                 <Tecla tecleo={textHandler} >P</Tecla>
//                 <Tecla tecleo={textHandler} >Q</Tecla>
//                 <Tecla tecleo={textHandler} >R</Tecla>
//                 <Tecla tecleo={textHandler} >S</Tecla>
//                 <Tecla tecleo={textHandler} >T</Tecla>
//                 <Tecla tecleo={textHandler} >U</Tecla>
//                 <Tecla tecleo={textHandler} >V</Tecla>
//                 <Tecla tecleo={textHandler} >W</Tecla>
//                 <Tecla tecleo={textHandler} >X</Tecla>
//                 <Tecla tecleo={textHandler} >Y</Tecla>
//                 <Tecla tecleo={textHandler} >Z</Tecla> */}
             
//                 <span></span>
//                 <span></span>
//                 <span></span>

//             </div>

//         </div >
//     )
// }

export default Teclado