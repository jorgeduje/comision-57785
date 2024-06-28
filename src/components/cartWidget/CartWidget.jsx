import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary" showZero={true}>
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
