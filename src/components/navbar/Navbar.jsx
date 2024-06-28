import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
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
          <CartWidget />
        </div>
      </>
    </div>
  );
};
