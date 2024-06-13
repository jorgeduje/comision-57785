export const Counter = ({ restar, contador, sumar }) => {
  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2> {contador} </h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
