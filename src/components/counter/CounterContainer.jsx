import { useState } from "react";
import { Counter } from "./Counter";

const CounterContainer = () => {
  const [contador, setContador] = useState(1);

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
  return <Counter contador={contador} sumar={sumar} restar={restar} />;
};

export default CounterContainer;
