import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = ({ children }) => {
  console.log(children);
  return (
    <div>
      <>
        <div className="containerNavbar">
          <li style={{ color: "beige" }}>Comision 57785</li>
          <ul className="categories">
            <li>Todas</li>
            <li>Urbanas</li>
            <li>Deportivas</li>
          </ul>
          <CartWidget />
        </div>
      </>
      {children}
    </div>
  );
};
