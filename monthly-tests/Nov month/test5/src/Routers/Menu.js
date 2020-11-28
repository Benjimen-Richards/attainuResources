import { Link } from "react-router-dom";
import "./Menu.css";
const Linking = () => {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#666",
          padding: "30px",
          textAlign: "center",
          fontSize: "35px",
          color: "white",
        }}
      >
        <h2>Welcome to my project</h2>
      </header>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">profile</Link>
        <Link to="/flexbox">Flexbox</Link>
        <Link to="/api">Api</Link>
        <Link to="/Csscolour">Css color Change</Link>
      </div>
    </div>
  );
};
export default Linking;
