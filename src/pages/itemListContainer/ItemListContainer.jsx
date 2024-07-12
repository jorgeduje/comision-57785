import ItemList from "./ItemList";
import { products } from "../../products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { Box, Skeleton } from "@mui/material";

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
        setTimeout(() => {
          resolve(name ? arrayFiltered : products); // [todos] [con una parte] [ deportivas ]
        }, 1000);
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

  // if (items.length === 0) {
  //   return (
  //     <div
  //       style={{
  //         width: "100%",
  //         display: "flex",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <PacmanLoader color="red" size={40} />
  //     </div>
  //   );
  // }
  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        <Box>
          <Skeleton variant="rectangular" width={250} height={100} />
          <Skeleton variant="text" width={150} height={60} />
          <Skeleton variant="text" width={150} height={50} />
          <Skeleton variant="rectangular" width={100} height={50} />
        </Box>

        <Box>
          <Skeleton variant="rectangular" width={250} height={100} />
          <Skeleton variant="text" width={150} height={60} />
          <Skeleton variant="text" width={150} height={50} />
          <Skeleton variant="rectangular" width={100} height={50} />
        </Box>

        <Box>
          <Skeleton variant="rectangular" width={250} height={100} />
          <Skeleton variant="text" width={150} height={60} />
          <Skeleton variant="text" width={150} height={50} />
          <Skeleton variant="rectangular" width={100} height={50} />
        </Box>

        <Box>
          <Skeleton variant="rectangular" width={250} height={100} />
          <Skeleton variant="text" width={150} height={60} />
          <Skeleton variant="text" width={150} height={50} />
          <Skeleton variant="rectangular" width={100} height={50} />
        </Box>
      </div>
    );
  }

  return (
    <div>
      <h1>Aca van a ir los items</h1>
      <h1>Aca van a ir otra cosa</h1>
      <ItemList items={items} />
      {/* {items.length === 0 ? <h1>Cargando.....</h1> : <ItemList items={items} />} */}
    </div>
  );
};

export default ItemListContainer;

// true - false ---> booleanos
// todo dato tiene su conotacion booleana

// "" "dsadsadasdasd" 0 123213 [dasd] {} null undefined NaN
// if(undefined){
//   // bloque
// }
