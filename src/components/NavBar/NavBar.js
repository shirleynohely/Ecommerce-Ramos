import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () =>{
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src="./images/logo-alsedo-lorenzo-e-hijos.png" alt="Alsedo Lorenzo e Hijos" height="60" />
          </a>
          <ul class="navbar-nav me-auto my-2 my-lg-0">
            <li class="nav-item">
              <a href="#tienda" class="nav-link active">
                Tienda
              </a>
            </li>
            <li class="nav-item">
              <a href="#quienes-somos" class="nav-link active">
                Quienes somos
              </a>
            </li>
            <li class="nav-item">
              <a href="#contacto" class="nav-link active">
                Contacto
              </a>
            </li>
          </ul>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <img src="./images/cart.svg" alt="cart" width="28" height="22" />
            </div>
          </nav>
        </div>
      </nav>
    );
}
export default NavBar