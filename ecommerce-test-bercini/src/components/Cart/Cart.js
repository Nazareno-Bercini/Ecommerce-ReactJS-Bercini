import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cartProducts} = useContext(CartContext)

    if (cartProducts.length === 0) {
        return (
            <>
                <p>No has saleccionado ningun producto</p>
                <Link to='/'>Selecciona tus productos</Link>
            </>
        )
    }

    return (
        <>
            {/* {cartProducts.map((product) => { */}
        </>
    )
}

export default Cart