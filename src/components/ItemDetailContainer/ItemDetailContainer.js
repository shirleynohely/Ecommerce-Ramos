import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductsById } from "../utils/asyncmock";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    
    const [product, setProduct] =  useState()

    const {productId} = useParams()
   

    useEffect(()=>{getProductsById(productId).then(res => {setProduct(res)}) }, [])   

     return (<>
     <ItemDetail {...product} />
     </>)
}
export default ItemDetailContainer