
import ItemProduct from "./ItemProduct"
const ItemListContainer = () => {

  const product1 = {
    title: 'Camiseta Titular',
    price: 7000,
    image: 'camiseta1.jpg',
    stock : 9

  }

  const product2 = {
    title: 'Camiseta Suplente',
    price: 7700,
    image: 'camiseta2.jpg',
    stock : 7
  }
    return (
        <div className='list-products'>
          <h2>Camisetas</h2>
          <ItemProduct data={product1}/>
          <ItemProduct data={product2}/>
      </div>

    )
}

export default ItemListContainer