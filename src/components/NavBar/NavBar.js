import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "categories")).then((response) => {
      const categories = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCategories(categories);
    });
  }, []);

  return (
    <nav className="nav navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="contain container-fluid">
        <Link to={`/`} className="navbar-brand">
          <img
            src="/images/logo-alsedo-lorenzo-e-hijos.png"
            alt="Alsedo Lorenzo e Hijos"
          />
        </Link>

        <ul className="navbar-nav me-auto my-2 my-lg-0">
          <li className="nav-item">
            <Link to={`/`} className="nav-link active">
              Productos
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              href="#categorias"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Categorías
            </a>
            <div className="dropdown-menu">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className="dropdown-item"
                >
                  {cat.description}
                </Link>
              ))}
            </div>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
