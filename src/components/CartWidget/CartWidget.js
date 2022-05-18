import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () =>{
    return(
        <nav class="navbar navbar-light bg-light">
        <div class="container">
          <img src="./images/cart.svg" alt="cart-widget"/><span>5</span>
        </div>
      </nav>
    );
}
export default CartWidget