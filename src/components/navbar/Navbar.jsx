import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

import logo from "../../images/logo.png";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img
        // src={logo}
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1718150058/probando/images_za8tj5.png"
        alt=""
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />

      <ul style={{ display: "flex", gap: "20px" }}>
        <li style={{ listStyle: "none" }}>Todas</li>
        <li style={{ listStyle: "none" }}>Urbanas</li>
        <li style={{ listStyle: "none" }}>Deportivas</li>
      </ul>

      <CartWidget />
    </div>
  );
};
