import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <CartWidget/>
        </div>
      </nav>
     
    );
}
export default NavBar