
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import products from "../../products.mock"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom"

const ItemListContainer = ({section}) => {

  const { category } = useParams()
  const [listProducts, setListProducts] = useState([])
  const filterByCategory = products.filter(
    (products) =>
     products.category === (category == 'primera_division' && 'primera_division') || products.category === (category == 'internacional' && 'internacional')  
     )
  

  const getProducts = () => new Promise ( (resolve, reject) => {
    setTimeout(() => {
      if (category) {
        resolve(filterByCategory)
    } else {
        resolve(products)
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
          <h2>{section}</h2>
          <ItemList dataProducts={listProducts}/>
          {/* <ItemDetailContainer /> */}

      </div>

    )
}

export default ItemListContainer