import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/products";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="/images/banner-Alsedo-Lorenzo-e-Hijos.jpg"
              className="d-block w-100 banner"
              alt="Alsedo Lorenzo e Hijos"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="title">{greeting}</h2>
              <p className="description">
                Materias primas y útiles para panificación.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="/images/banner2.jpg"
              className="d-block w-100 banner"
              alt="Alsedo Lorenzo e Hijos"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ItemList products={products} />
      {loading && <Loader />}
    </>
  );
};

export default ItemListContainer;
