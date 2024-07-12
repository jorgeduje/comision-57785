import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [ {id:1}, {id:5}, {id:3} ] -
  // quantity 10 - price 5 ---> 50
  // quantity 3 - price 10 ---> 30

  // sumar todos los subtotales // 80

  // funcion modificar
  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        // [ {} , {}, {moficiado}, {}, {}]
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
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

  const getQuantityById = (id) => {
    // 3
    // no tenes unididades --> 1
    // tenes x unidades ---> x unidades
    let productoEncontrado = cart.find((product) => product.id === id);
    // siempre el metodo find, devuelve el elemento o undefined si no hay coincidencias
    //  {} ||  undefined

    // return productoEncontrado.quantity; // se rompe si es undefined
    return productoEncontrado?.quantity;
  };
  // total del precio

  // const getTotalPrice = () => {
  //   let total = 0; // 10 // 20
  //   for (let i = 0; i < cart.length; i++) {
  //     total += cart[i].price * cart[i].quantity;
  //   }
  //   return total;
  // };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };
  // cantidad de elementos
  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProduct,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

// map(() => {});
// map(() => {});
// map(() => {});
// map(() => {});
// reduce(() => {}, valorInicial);
