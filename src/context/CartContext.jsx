import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [ {id:1}, {id:5}, {id:3} ] -

  // funcion modificar
  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        // [ {} , {}, {moficiado}, {}, {}]
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      }); // siempre devuelve un array y siempre de la misma longitud
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((product) => product.id === id); // true - false
    return existe;
  };

  // una funcion -->
  // eliminar cada producto

  const deleteProduct = (id) => {
    // 2
    // encontrar ese producto y quitarlo
    console.log(id);
    // filter ---> siempre devuelve un nuevo array
    // retornar un booleano [1, 3, 4, 5] -->
    let newArr = cart.filter((elemento) => elemento.id !== id);
    setCart(newArr);
  };

  // total del precio
  // cantidad de elementos

  let data = { cart, addToCart, clearCart, deleteProduct };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
