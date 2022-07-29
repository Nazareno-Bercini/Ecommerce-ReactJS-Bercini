import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import products from "../../products.mock"
const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])

  const getProducts = () => new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })

  useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await getProducts()
          setListProducts(res)
        }

        catch(erorr){
          
        }
      }

      getProduct()

      }, []
  )
  


  
    return (
        <div className='list-products'>
          <h2>Camisetas</h2>
          <ItemList dataProducts={listProducts}/>
      </div>

    )
}

export default ItemListContainer