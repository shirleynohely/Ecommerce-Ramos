import "bootstrap/dist/css/bootstrap.min.css";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartWidget = () => {
  const { getQuantity, cart } = useContext(CartContext);
  const quantity = getQuantity();

  return (
    <nav className="navbar navbar-light bg-light cart">
      {cart.length > 0 && (
        <Link to={`/cart`}>
          <img src="/images/cart.svg" alt="carrito" />
          {quantity}
        </Link>
      )}
    </nav>
  );
};
export default CartWidget;
