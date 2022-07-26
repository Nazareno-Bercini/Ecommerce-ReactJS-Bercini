import ItemCount from "../ItemCount/ItemCount"
const ItemProduct = ({data, action}) => {

    const {title, image, price, stock} = data
  
    return (
        <div className='item-product'>
            <img src={`/assets/img/${image}`} alt=''></img>
            <p>{title}</p>
            <span>$ {price}</span>
            <span>Disponibles: {stock}</span>

            <ItemCount stock={stock} />

            <button onClick={action}>Agregar al carrito</button>

        </div>
    )
}

export default ItemProduct