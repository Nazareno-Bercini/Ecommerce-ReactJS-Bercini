import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "./CartList"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cartProducts,clear } = useContext(CartContext)


        return (
            <div className="cart-container">

{
                cartProducts.length === 0 ? <Link to='/'><h2>No has saleccionado ningun producto</h2> </Link>
                                    :(<table>
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th>SubTotal</th>
                                                <th onClick={()=>clear()}>Vaciar</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <CartList/>
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th>Total : ${cartProducts.reduce((acc,prod) => acc + (prod.price*prod.quantity), 0)} </th>
                                            </tr>
                                        </tfoot>
                                    </table>)
            }


            
            </div>
        )
    
}

export default Cart