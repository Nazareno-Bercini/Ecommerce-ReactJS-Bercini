import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import products from "../../products.mock";

const  ItemDetailContainer = () => {

    const [detail, setDetail] = useState ([])

    const getItem = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(products[0])
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