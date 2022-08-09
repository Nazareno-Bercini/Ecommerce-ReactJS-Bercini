import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <Link to='/cart'><i className="bi bi-cart3"></i></Link>
        </div>
    )
}

export default CartWidget