import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    return(
        <nav className="navbar navbar-light bg-light">
        <Link to={`/cart`} className="container">
          <img src="/images/cart.svg" alt="cart-widget"/><span></span>
        </Link>
      </nav>
    );
}
export default CartWidget