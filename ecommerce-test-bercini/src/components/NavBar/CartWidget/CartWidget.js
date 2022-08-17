import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/MenuItem';
import { CartContext } from "../../../context/CartContext"
import products from "../../../products.mock";

const CartWidget = () => {
    // const [anchorEl, setAnchorEl] = useState(null);
    const {cartProducts, totalProducts} = useContext(CartContext)
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    
    // {cartProducts.map((product) => {})}
    return (
        <div className='cart-widget'>
    {/* //         {cartProducts.length !== 0 && <p>{totalProducts}</p>} */}
             <i className="bi bi-cart3"></i>
             <Link to='/cart'></Link> 
             <span>{totalProducts() || ''}</span>
         </div>
         )
    //         <ShoppingCartIcon 
    //             aria-aria-controls={open ? 'basic-menu' : undefined}
    //             aria-haspopup='true'
    //             aria-expanded={open ? true : undefined}
    //             onClick={handleClick}
    //         />
    //         <Menu 
    //             id='basic-menu'
    //             anchorEl={anchorEl}
    //             open={open}
    //             onClose={handleClose}
    //             MenuListProps={{
    //             'aria-labelledby': 'basic-button',
    //             }}></Menu>
    //             {cartProducts.map((product) => {
    //                 return(
    //                     <div className='item-cart-product' key={product.id}>
    //                         <img src={`/assets/${product.image}`} alt="" />
    //                         <div className='cart-product__details'>
    //                             <p>{product.title}</p>
    //                             <p>TAMAÑO : XS</p>
    //                         </div>
    //                         <div className='cart-product__details'>
    //                             <p>$ {product.price}</p>
    //                         </div>
    //         />
}

export default CartWidget