import { createContext, useState } from "react";



const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])



    const addProductToCart = (dataProduct,contador) => {
        const item = cartProducts.find(prod => prod.id === dataProduct.id) 
        if(item) 
        {
            if(contador > 1){ 
                item.quantity+=contador; 
            }
            else{ 
                item.quantity++ 
            }
        }
        else{ 
            if(!contador){ 
                setCartProducts([...cartProducts,dataProduct]) 
            }
            else{ 
                dataProduct.quantity = contador 
                setCartProducts([...cartProducts,dataProduct]) 
            }
        }
    }

        
        const deleteProduct = (product) => {
            const itemInCart = cartProducts.find( (cartProduct) => cartProduct.id === product.id)

            if(itemInCart.quantity === 1){
                setCartProducts(cartProducts.filter ((cartProduct) => cartProduct.id !== itemInCart.id))
        }

        else{
            itemInCart.quantity--               
            setCartProducts([...cartProducts]) 
        }
    


    }
        
        const clear = () => {
            setCartProducts([])
        }
        
        const data = {
            addProductToCart,
            cartProducts,
            setCartProducts,
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