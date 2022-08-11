import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import products from "../../../products.mock";

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {cartProducts, clear} = useContext(CartContext)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    {cartProducts.map((product) => {})}
    return (
        <div className='cart-widget'>
            <Link to='/cart'><i className="bi bi-cart3"></i></Link>
        </div>
    )
}

export default CartWidget