import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () =>{

  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()

    return(
        <nav className="navbar navbar-light bg-light">
        <Link to={`/cart`} className="container">
          <img src="/images/cart.svg" alt="cart-widget"/>{quantity}
        </Link>
      </nav>
    );
}
export default CartWidget