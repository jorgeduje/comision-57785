import { useState } from "react";
import { ProductCard } from "../productCard/ProductCard";

export const Counter = () => {
  // estado es como una variable pero que recuerda su valor anterior
  const [contador, setContador] = useState(1); // [ undefined, function ]

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2> {contador} </h2>
      <button onClick={sumar}>Sumar</button>
      <ProductCard title="una" description="dasda" price={contador} />
    </div>
  );
};
