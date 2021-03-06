import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../../Context/CartContext";
import toast from 'react-hot-toast';

const ItemDetail = ({
  id,
  pictureUrl,
  title,
  price,
  stock,
  description,
  category,
}) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem, getProduct } = useContext(CartContext);
  const product = getProduct(id);
 
  const onAdd = (quantity) => {
    setQuantity(quantity);
    toast.success("Se agregaron los productos al carrito",{
      style: {
        borderRadius: '10px',
        background: '#000000',
        color: '#fff',
      },
    });
    addItem({ id, title, price, quantity, pictureUrl });
  };
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pictureUrl} className="img-fluid rounded-start" alt={title}/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">Precio: ${price}</p>
              <p className="card-text">Hay {stock} productos disponibles</p>
              <p className="card-text">Categoría: {category}</p>

              {!quantity ? (
                <div className="item-count">
                  <ItemCount initial={product} stock={stock} onAdd={onAdd} />
                </div>
              ) : (
                <div className="btn-back">
                  <Link
                    to={`/cart`}
                    type="button"
                    className="btn btn-outline-dark"
                  >
                    Terminar compra
                  </Link>
                </div>
              )}

              <div className="btn-back">
                <Link to={`/`} type="button" className="btn btn-outline-dark">
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
