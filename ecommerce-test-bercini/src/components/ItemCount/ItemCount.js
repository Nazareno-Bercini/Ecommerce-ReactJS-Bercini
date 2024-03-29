import { useState, useContext } from "react" 
import { CartContext } from "../../context/CartContext"

const ItemCount=({stock, quantitySelected, productData}) => {

    const {addProductToCart} = useContext(CartContext)
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
        addProductToCart(productData, countQuantity)
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