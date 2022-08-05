import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import products from "../../products.mock";
import { useParams } from "react-router-dom";

const  ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [detail, setDetail] = useState ([])

    const filtrerById = () => {
        products.some ((product) => {
            if(product.id == id) {
                return product
            }
        })
        
    }
    
    useEffect(() => {
        filtrerById()
    }, [])
   


    const getItem = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(products[id])
        }, 2000)
    })

    useEffect (() => {
        getItem 
        .then ((res) =>{
            setDetail (res)
        })
        .catch((error)=> {
            console.log("error")
        })
        .finally(()=>{})
    },[])
    return (
        <ItemDetail data={detail} />
    )
}

export default ItemDetailContainer