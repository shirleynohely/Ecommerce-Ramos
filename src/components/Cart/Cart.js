import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, removeAll, total, getQuantity } =
    useContext(CartContext);

  return (
    <>
      <div>
        {cart.length > 0 && (
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col title">Producto</div>
              <div className="col title">Cantidad</div>
              <div className="col title">Precio</div>
              <div className="col title">Subtotal</div>
              <div className="col"></div>
            </div>
            <hr></hr>
            {cart.map((prod) => (
              <div key={prod.id} className="row">
                <div className="col cart-img">
                  <img src={prod.pictureUrl} alt={prod.title} />
                </div>
                <div className="col">
                  <Link to={`/detail/${prod.id}`}>{prod.title}</Link>
                </div>
                <div className="col">{prod.quantity}</div>
                <div className="col">${prod.price}</div>
                <div className="col">${prod.quantity * prod.price}</div>
                <div className="col">
                  <button
                    onClick={() => removeItem(prod.id)}
                    className="btn btn-outline-danger"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            <hr></hr>
            <div className="title">Total ítems: {getQuantity()}</div>
            <div className="title col">Total a pagar: ${total()}</div>
            <div className="row">
              <div className="col">
                <button onClick={removeAll} className="btn btn-outline-dark">
                  Vaciar Carrito
                </button>
              </div>
              <div className="col">
                <Link
                  to={`/order`}
                  type="button"
                  className="btn btn-outline-dark"
                >
                  Generar orden de compra
                </Link>
              </div>
            </div>
          </div>
        )}
        {cart.length === 0 && (
          <div className="container">
            <h1>No hay productos en el carrito</h1>
            <div className="buyprod">
              <Link to={`/`} type="button" className="btn btn-outline-dark">
                Ver productos para comprar
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
