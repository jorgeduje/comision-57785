import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  let rol = "user";
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link style={{ color: "beige" }} to="/">
            Comision 57785
          </Link>
          <ul className="categories">
            <Link to="/">Todas</Link>
            <Link to="/category/urbanas">Urbanas</Link>
            <Link to="/category/deportivas">Deportivas</Link>
          </ul>
          {rol === "admin" && <Link to="/dashboard">Dashboard</Link>}
          <CartWidget />
        </div>
      </>
    </div>
  );
};
