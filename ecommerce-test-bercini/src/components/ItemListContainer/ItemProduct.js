
const ItemProduct = (image, tittle, price) => {
    return (
        <div className='item-product'>
            <img src={`/assets/img/${image}`} alt=''></img>
            <p>{tittle}</p>
            <span>$ {price}</span>
            <button>Comprar</button>

        </div>
    )
}

export default ItemProduct