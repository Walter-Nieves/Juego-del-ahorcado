import { useRef, useState } from 'react'

function Formulario() {

    const refInputNombre = useRef();
    const refInputApellido = useRef();
    const refInputAsignatura = useRef();

    const textHandler = (e) => {
        e.preventDefault();

        const nombre = refInputNombre.current.value;
        const apellido = refInputApellido.current.value;
        const asignatura = refInputAsignatura.current.value;

        alert(`Bienvenido Sr(a). ${nombre} ${apellido} usted esta matriculado para el curso ${asignatura}`)

        // Limpiar el formulario
        refInputNombre.current.value = '';
        refInputApellido.current.value = '';
        refInputAsignatura.current.value = '';
    }

    return (
        <div style={{width:"100vw",display:"flex", justifyContent:"center", alignItems:"center"}}>


        <div >
            <form style={{display: "flex",backgroundColor:"beige",justifyContent:"center", alignItems:"center", flexDirection: "column",
                padding:"10px",border:"1px solid black", borderRadius:"10px",boxShadow:"2px 2px 5px"
             }} onSubmit={textHandler}  >
                <h1>Formulario</h1>
                <label  htmlFor="Nombre">Nombre</label>
                <input style={{borderRadius:"5px"}} ref={refInputNombre} type="text" required/>
                <br />
                <label htmlFor="Apellido">Apellido</label>
                <input style={{borderRadius:"5px"}} ref={refInputApellido} type="text" required/>
                <br />
                <label htmlFor="Asignatura">Asignatura</label>
                <input style={{borderRadius:"5px"}} ref={refInputAsignatura} type="text" required/>
                <br />
                <button style={{border:"1px solid black"}}  >Enviar</button>
            </form>
        </div>

        </div>
    )
}
export default Formulario



// el formulario a continuacion esta con useState, dejar comentado uno de los dos (Formulario o Formulario2)

// function Formulario2() {
//     const [nombre, setNombre] = useState('');
//     const [apellido, setApellido] = useState('');
//     const [asignatura, setAsignatura] = useState('');

//     const textHandler = (e) => {
//         e.preventDefault();

//         alert(`Bienvenido Sr(a). ${nombre} ${apellido}, usted está matriculado para el curso ${asignatura}`);

//         // Limpiar el formulario
//         setNombre('');
//         setApellido('');
//         setAsignatura('');
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//             <form onSubmit={textHandler}>
//                 <h1>Formulario</h1>
//                 <label htmlFor="Nombre">Nombre</label>
//                 <input type="text" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}required/>
//                 <br />
//                 <label htmlFor="Apellido">Apellido</label>
//                 <input type="text" id="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}required/>
//                 <br />
//                 <label htmlFor="Asignatura">Asignatura</label>
//                 <input type="text" id="Asignatura" value={asignatura} onChange={(e) => setAsignatura(e.target.value)}required/>
//                 <br />
//                 <button type="submit">Enviar</button>
//             </form>
//         </div>
//     );
// }

// export default Formulario2;