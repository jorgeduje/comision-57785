import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";

const ItemDetailContainer = () => {
  let id = 2;
  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
