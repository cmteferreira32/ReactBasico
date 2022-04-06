import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Contador = () => {
 
    // let numero = 0;
    let [numero, setNumero] = useState(0)

    function somar(){
        setNumero(++numero)
        console.log(numero)
    }

  return (
    <div>       
        
        <h1>Contador</h1>

        {numero}  
        <Button variant="success" onClick={somar} > + </Button>     
        
    </div>
  )
}

export default Contador