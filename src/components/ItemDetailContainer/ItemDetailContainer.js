import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import {getDoc, doc} from "firebase/firestore";
import {db} from '../../services/firebase';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db,'products',id)).then(res=>{
      const product = {id: res.id, ...res.data()}
      setProduct(product);
      setLoading(false);
    })
  }, [id]);

  return (
    <>
    <div>
     {loading && <Loader />}
     </div>
     <div>
    <ItemDetail {...product} />
    </div>
    </>
  );
};
export default ItemDetailContainer;
