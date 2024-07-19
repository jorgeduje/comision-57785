import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "sonner";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" duration={4000} />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => {
              return <Route key={id} path={path} element={<Element />} />;
            })}
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<h1> 404 Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
