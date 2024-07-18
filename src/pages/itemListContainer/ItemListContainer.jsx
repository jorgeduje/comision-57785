import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Skeleton } from "@mui/material";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      }); // []
      setItems(arrayValido);
    });
  }, [name]);

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

  // const addProducts = () => {
  //   let productsCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);
  //   });
  // };

  return (
    <div>
      {/* <Button variant="contained" onClick={addProducts}>
        Agregar productos
      </Button> */}
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
