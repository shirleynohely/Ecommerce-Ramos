import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/products";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
     
      <div>
        <ItemDetail {...product} />
        {loading && <Loader />}
      </div>
    </>
  );
};
export default ItemDetailContainer;
