import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
// "3" -- 3
// +"3" --3
// Number("3")-- 3
// parseInt("e") -- 3
