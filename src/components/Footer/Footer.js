import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>
          &copy; 2022 <Link to={`/`}>Alsedo Lorenzo e Hijos</Link> - By{" "}
          <Link to={`/`}>Shirley Nohely</Link>
        </p>
      </footer>
    </>
  );
};
export default Footer;
