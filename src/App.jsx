import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import Cart from "./pages/cart/Cart";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Checkout from "./pages/checkout/Checkout";
import CartContextProvider from "./context/CartContext";
import CheckoutFormik from "./pages/checkoutFormik/CheckoutFormik";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" duration={4000} />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          <Route path="*" element={<h1> 404 Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
