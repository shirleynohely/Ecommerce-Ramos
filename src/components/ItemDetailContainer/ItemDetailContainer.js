import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { getProductsById } from "../utils/asyncmock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProductsById(id).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <ItemDetail {...product} />
      {loading && <Loader />}
    </>
  );
};
export default ItemDetailContainer;
