import { useState, useEffect, useContext } from 'react';
import './ItemProduct.css';
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext';

const ItemProduct = ({data, action}) => {
    const {handleClick} = useContext(CartContext)
    
    const {title, image, price, stock, id} = data
    
  

    return (
        <Link to={`/productos/${id}`}>
            <div className='item-product'>
                <img src={`/assets/img/${image}`} alt=''></img>
                <p>{title}</p>
                <span>$ {price}</span>
                <span>Disponibles: {stock}</span>

                <ItemCount stock={stock} />

                <button onClick={handleClick}>Agregar al carrito</button>

            </div>
        </Link>
    )
}

export default ItemProduct