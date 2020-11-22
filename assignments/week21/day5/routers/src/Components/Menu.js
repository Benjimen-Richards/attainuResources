import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="navElements">
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contant us</Link>
    </div>
  );
};
export default Menu;
