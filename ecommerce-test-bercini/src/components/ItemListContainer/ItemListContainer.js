import ItemProduct from "./ItemProduct"
const ItemListContainer = () => {
    return (
        <div className='list-products'>
        <ItemProduct tittle='Camiseta Titular' price={10000} image={'camiseta1.jpg'}/>
        <ItemProduct tittle='Camiseta Suplente' price={9000} image={'camiseta2.jpg'}/>
      </div>

    )
}

export default ItemListContainer