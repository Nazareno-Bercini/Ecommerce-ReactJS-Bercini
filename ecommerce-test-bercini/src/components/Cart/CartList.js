import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartList = () => {

    const {cartProducts,deleteProduct} = useContext(CartContext)

    return(
        <>
            {cartProducts.map( product => {
                return(

                        <tr key={product.id} >
                            <td>{product.title}<button onClick={()=>{deleteProduct(product.id)}}>Eliminar producto</button></td>
                            <td>{product.quantity}</td>
                            <td>{product.price*product.quantity}</td>
                        </tr>
                    )
            })
            }
            </>
    )
}

export default CartList
