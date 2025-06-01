import Tecla from "./Tecla.jsx"

function Foco({ on }) {

    return (
        <div>
            {on && <h2>Titulo</h2>}
            {on && <Tecla tecleo={() => alert("A")}>A</Tecla>}

            {!on && <h2>Descripcion</h2>}

            <div>
                <img src={`/public/imagenes/${on ? "focoon" : "focooff"}.png`} alt="Foco" />
                <button>{on ? "Encender" : "Apagar"}</button>
            </div>



                {/* {props.on == true ?
                <div>
                    <img src="/public/imagenes/focoon.png" alt="Foco" />
                    <button>Apagar</button>
                </div>
                :
                <div>
                    <img src="/public/imagenes/focooff.png" alt="Foco" />
                    <button>Encender</button>
                </div>
            } */}

        </div>

    )



    // if (props.on == true) {
                //     return (
                //         <div>
                //             <img src="/public/imagenes/focoon.png" alt="Foco" />
                //             <button>Apagar</button>
                //         </div>
                //     )
                // } else {

                //     return (
                //         <div>
                //             <img src="/public/imagenes/focooff.png" alt="Foco" />
                //             <button>Encender</button>
                //         </div>
                //     )
                // }
            // }

};            

export default Foco