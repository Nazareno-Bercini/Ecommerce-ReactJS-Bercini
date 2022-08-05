
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import products from "../../products.mock"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom"

const ItemListContainer = ({categoryParam}) => {

  const { category } = useParams()
  const filterCategory = products.filter((prod) => prod.categoryId === category)
  
  const [listProducts, setListProducts] = useState([])

  const getProducts = () => new Promise ( (resolve, reject) => {
    setTimeout(() => {
      if (categoryParam === "") {
        resolve(products)
    } else {
        resolve(filterCategory)
    }
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
          {/* <ItemDetailContainer /> */}

      </div>

    )
}

export default ItemListContainer