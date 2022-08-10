import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ItemDetail = ({data}) => {

    const [quantitySelected, setQuantitySelected] = useState(0)

    const {title, image, price, stock} = data

    return(

        
        <div className="detailProduct">
            <div className="imgProd">
            <img src={`/assets/img/${image}`} alt=''></img>
            </div>

            <div className="infoProd">
                <h2>{title}</h2>
                <h2 className="price">$ {price}</h2>
                <span>Disponibles: {stock}</span>
            </div>

            <div className="talles">
                <h2>Talles</h2>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>

            <div className="botonProd">
                {
                    quantitySelected > 0 ? <Link to='/cart'><button>Finalizar compra</button></Link> : <ItemCount quantitySelected={setQuantitySelected}/>
                }
                
                
            </div>


        </div>
)
}

export default ItemDetail