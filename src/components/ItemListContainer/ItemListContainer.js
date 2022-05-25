import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";


const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([])
        
    useEffect(()=>{getProducts().then (res =>{
    setProducts(res)
    })

    }, [])
    
return (
    <><h1 class="display-1">{props.greeting}</h1>
    <ItemList products={products} /></>
    )

}


export default ItemListContainer