import { useRef, useState } from 'react'

function Mayusculainador() {
    

    const [palabra,setPalabra] = useState("");
    const [gringo,setGringo]= useState(false);
    const refInput = useRef();


    const textHandler =()=>{
        const nuevoValor = refInput.current.value.toUpperCase();
        setGringo(String(nuevoValor).includes("Ñ"));
        setPalabra(nuevoValor);
    }

    return(
        <div style= {{display:"flex",flexDirection:"column"}}>
            <h1>{palabra}</h1>
            <input ref={refInput} type="text" onChange={textHandler} />
            {gringo &&   <img src="https://cdn.milenio.com/uploads/media/2019/07/04/tio-sam-ilustracion-iconica-unidos_498_0_2700_1680.jpg"  width={200} alt="Gringo" /> }
          
        </div>


    )

} 
export default Mayusculainador

