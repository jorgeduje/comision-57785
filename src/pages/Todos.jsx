import { useFetch } from "../hooks/useFetch";
import { usePaginate } from "../hooks/usePaginate";
import { useState } from "react";

const Todos = () => {
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos", []);
  const [quantity, setQuantity] = useState(10);

  const { currentData, nextPage, prevPage, totalPages, currentPage } =
    usePaginate(todos, quantity);

  return (
    <div>
      <h1>Aca van a ir los todos</h1>
      {currentData.map((todo) => {
        return <h2 key={todo.id}>{todo.title}</h2>;
      })}
      <button onClick={prevPage} disabled={currentPage === 1}>
        anterior
      </button>
      <h2>Estoy en la pagina {currentPage}</h2>
      <button disabled={totalPages === currentPage} onClick={nextPage}>
        siguiente
      </button>

      {/* botones */}
      <button onClick={() => setQuantity(5)}>5</button>
      <button onClick={() => setQuantity(10)}>10</button>
      <button onClick={() => setQuantity(15)}>15</button>
    </div>
  );
};

export default Todos;
