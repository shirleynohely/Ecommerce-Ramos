import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../utils/asyncmock";
import { getProductsByCategory } from "../utils/asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    const {categoryId} = useParams()
        
    useEffect(()=> { 
        if(!categoryId){
            getProducts().then (res =>{
                setProducts(res);
                setLoading(false);
        }) 
    } else {
        getProductsByCategory(categoryId).then(res => {
            setProducts(res);
            setLoading(false);
        })
    }
    }, [categoryId])
    
return (
    <><h1 class="display-1">{greeting}</h1>
    <ItemList products={products} />
    {loading && <Loader />}    
    </>
    )

}


export default ItemListContainer