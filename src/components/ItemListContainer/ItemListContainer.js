import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore";
import {db} from '../../services/firebase';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collRef = categoryId ? query(collection(db,'products'), where('category', '==', categoryId)) : collection(db,'products');

    getDocs(collRef).then(res=>{
      const products = res.docs.map( doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setProducts(products);
      setLoading(false);
    })
  }, [categoryId]);

  return (
    <>
      <h1 className="display-1">{greeting}</h1>
      <ItemList products={products} />
      {loading && <Loader />}
    </>
  );
};

export default ItemListContainer;
