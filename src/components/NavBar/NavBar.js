import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () =>{
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to={`/`} class="navbar-brand">
            <img src="/images/logo-alsedo-lorenzo-e-hijos.png" alt="Alsedo Lorenzo e Hijos" height="60" />
          </Link>
          
          <ul class="navbar-nav me-auto my-2 my-lg-0">
            <li class="nav-item">
              <Link to={`/`} class="nav-link active">
                Productos
              </Link>
            </li>
            
              <li class="nav-item dropdown">
                <a href="#categorias" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Categorías</a>
                <div class="dropdown-menu">
                        <Link to={`/category/decoracion`} class="dropdown-item">Decoración</Link>
                        <Link to={`/category/ingredientes`} class="dropdown-item">Ingredientes</Link>
          
                </div>
              </li>           
          </ul>
          <CartWidget/>
          </div>
          
       
      </nav>
     
    );
}
export default NavBar