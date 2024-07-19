import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import ItemDetailContainer from "../pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../pages/itemListContainer/ItemListContainer";

export const routes = [
  {
    id: 1,
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: 2,
    path: "/category/:name",
    Element: ItemListContainer,
  },
  {
    id: 3,
    path: "/cart",
    Element: Cart,
  },
  {
    id: 4,
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: 5,
    path: "/checkout",
    Element: Checkout,
  },
];
