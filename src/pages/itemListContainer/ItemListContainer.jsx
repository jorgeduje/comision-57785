import ItemList from "./ItemList";
import { products } from "../../products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (product) => product.category === name
      );
      if (x) {
        resolve(name ? arrayFiltered : products); // [todos] [con una parte] [ deportivas ]
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;

// true - false ---> booleanos
// todo dato tiene su conotacion booleana

// "" "dsadsadasdasd" 0 123213 [dasd] {} null undefined NaN
// if(undefined){
//   // bloque
// }
