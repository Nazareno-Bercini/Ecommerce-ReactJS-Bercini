import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    const addProductToCart = (product) => {
        let isIncart = cartProducts.find(cartItem => cartItem.id === product.id)
        if (!isIncart) {
            setTotalProducts(totalProducts = product.quantity)
           return setCartProducts(cartProducts => [...cartProducts, product])
        }
    }

    const deleteProduct = (product) => {
        setCartProducts (cartProducts.filter( (cartProduct) => cartProduct.id !== product.id))
    }

    const clear = () => {
        setCartProducts([])
    }

    const data = {
        addProductToCart,
        cartProducts,
        setCartProducts,
        totalProducts,
        deleteProduct,
        clear
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider

export {CartContext}