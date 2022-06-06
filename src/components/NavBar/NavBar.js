import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';



const NavBar = () =>{
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={`/`} className="navbar-brand">
            <img src="/images/logo-alsedo-lorenzo-e-hijos.png" alt="Alsedo Lorenzo e Hijos" height="60" />
          </Link>
          
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link to={`/`} className="nav-link active">
                Productos
              </Link>
            </li>
            
              <li className="nav-item dropdown">
                <a href="#categorias" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Categorías</a>
                <div class="dropdown-menu">
                        <Link to={`/category/decoracion`} className="dropdown-item">Decoración</Link>
                        <Link to={`/category/ingredientes`} className="dropdown-item">Ingredientes</Link>
          
                </div>
              </li>           
          </ul>
          <CartWidget/>
          </div>
          
       
      </nav>
     
    );
}
export default NavBar