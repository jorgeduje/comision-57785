import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate(); // ---> es una funcion

  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(""); // truthy y falsy

  let total = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    let productCollection = collection(db, "products");
    cart.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(`Gracias por tu compra , tu ticket es ${res.id} `);
      })
      .catch()
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>
      {orderId ? (
        <h2>Gracias por tu compra, tu ticket es : {orderId}</h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturarData}
            name="nombre"
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={capturarData}
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            name="telefono"
            onChange={capturarData}
          />

          <button>comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
