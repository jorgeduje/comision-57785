const ItemList = ({ greeting, numero, sumar, cambiarNombre }) => {
  return (
    <div>
      <h1> {greeting} </h1>
      <h1>{numero}</h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
};

export default ItemList;
