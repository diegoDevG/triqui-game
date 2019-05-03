import React, {  useState } from 'react';

const HelloWordHooks = () =>{

    const [active, setActive] = useState(true)

    const handleClikOcultar = () =>{
        setActive(!active);       
    }
    
    const textButton = active ? 'Ocultar' : 'Mostrar';
    return(
        <div>
            <button onClick = {handleClikOcultar}>{ textButton } </button>
            {active &&
                <h1>Hola Mundo con Hooks</h1>
            }
            
        </div>
    );
}

export default HelloWordHooks;