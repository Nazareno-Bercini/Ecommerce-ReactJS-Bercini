import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemProduct from '../ItemListContainer/ItemProduct'

const ItemList = ({dataProducts}) => {

    const {name, setName, handleClick} = useContext(CartContext)
    return(
        <>
            {dataProducts.map( (product) =>{
             return <ItemProduct key={product.id} data={product} />   
            } 
            )}
        </>
    )
}

export default ItemList