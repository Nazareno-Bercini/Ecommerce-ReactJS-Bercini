import { useState } from "react" 

const ItemCount=({stock, quantitySelected}) => {

    const [countQuantity, setCountQuantity] = useState(1)

    const addQuantity = () => {
        if (countQuantity < stock)
        setCountQuantity (countQuantity + 1)
    }

    const removeQuantity = () => {
        if (countQuantity > 1)
        setCountQuantity (countQuantity - 1)
    }

    const onAdd = () => {
        quantitySelected(countQuantity)

    }
    
    


    return (
        <>
            <div className="countProd">
                <button onClick={removeQuantity}>-</button>
                <span>{countQuantity}</span>
                
                <button onClick={addQuantity}>+</button>

            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </>
    )

}

export default ItemCount