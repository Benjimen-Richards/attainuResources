import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <div className="Elements">
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          Contact
        </Link>
        <Footer />
      </div>
    </div>
  );
};
export default Menu;
