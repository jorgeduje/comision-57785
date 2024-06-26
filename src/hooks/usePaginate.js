import { useState } from "react";

export const usePaginate = (data, itemsPerPage) => {
  // 100 --> 10, 20
  // 10

  const [currentPage, setCurrentPage] = useState(1);

  let totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return { currentData, nextPage, prevPage, totalPages, currentPage };
};

// let n = 2.1
// Math.floor(n) ---> lo lleva al piso
// Math.round(n) ---> redondea segun la regla del .5
// Math.ceil(n) --> lo lleva al techo

// [ 1, 2, 3, 4, 5, 6,6 ].slice(3, 5)
// let edad = 15

// let persona = {
//     name: "pepe",
//     edad
// }
