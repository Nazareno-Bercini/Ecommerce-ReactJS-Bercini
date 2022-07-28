import { useState } from "react" 

const ItemCount=({stock}) => {

    
    const [contador, setContador] = useState(1)
    

    const addNumber = () => {
        if (contador < stock)
        setContador(contador + 1)
    }

    const restNumber = () => {
        if (contador > 1) 
        setContador(contador - 1)
    }


    return (
        <div className="countProd">
                <button onClick={{restNumber}}>-</button>
                <p>{contador}</p>
                <button onClick={{addNumber}}>+</button>

            </div>
    )

}

export default ItemCount