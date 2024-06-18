import { useEffect, useState } from "react";

const FetchData = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = fetch("https://fakestoreapi.com/products");
    getProducts.then((res) => res.json()).then((res) => setProductos(res));
  }, []);

  const createNewProduct = () => {
    let newProduct = {
      id: 2,
      title: "nuevo producto",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    };

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        // informacion para el backend
        // autenticacion
        // tipo de datos a transferir
      },
      body: JSON.stringify(newProduct),
    });
  };

  const deleteProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
      headers: {
        // informacion para el backend
        // autenticacion
        // tipo de datos a transferir
      },
    });
  };

  const updateProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "patch",
      headers: {
        // informacion para el backend
        // autenticacion
        // tipo de datos a transferir
      },
      body: JSON.stringify({ title: "nuevo title", price: 123 }),
    });
  };

  return (
    <div>
      {productos.map((producto) => {
        return <h1 key={producto.title}>{producto.title}</h1>;
      })}

      <button onClick={createNewProduct}>Crear</button>
    </div>
  );
};

export default FetchData;
