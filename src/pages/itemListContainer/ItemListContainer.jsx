import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting, a, b, c, d }) => {
  const [numero, setNumero] = useState(0);
  const [misProductos, setMisProductos] = useState([]);
  const [nombre, setNombre] = useState("pepito");

  useEffect(() => {
    console.log("me ejecute");
    const productos = [
      {
        nombre: "Camiseta",
        precio: 19.99,
        categoria: "Ropa",
      },
      {
        nombre: "Laptop",
        precio: 899.99,
        categoria: "Electrónica",
      },
      {
        nombre: "Cafetera",
        precio: 49.99,
        categoria: "Hogar",
      },
    ];

    setMisProductos(productos);
  }, [nombre]); // array de dependencias

  const sumar = () => {
    setNumero(numero + 1);
  };

  const cambiarNombre = () => {
    setNombre("maria");
  };

  return (
    <ItemList
      greeting={greeting}
      sumar={sumar}
      cambiarNombre={cambiarNombre}
      numero={numero}
    />
  );
};

export default ItemListContainer;
