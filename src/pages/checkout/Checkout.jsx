import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const [arrayCheckbox, setArrayCheckbox] = useState([]);
  console.log(arrayCheckbox);

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const capturarData = (event) => {
    // let { name, value } = event.target;
    // setUser({ ...user, [name]: value });
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const handleRadio = (e) => {
    console.log(e.target.value);
  };
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setArrayCheckbox([...arrayCheckbox, value]);
    } else {
      let newArr = arrayCheckbox.filter((el) => el !== value);
      setArrayCheckbox(newArr);
    }
  };

  return (
    <div>
      <h1>Aca va el formulario</h1>

      <form onSubmit={envioDeFormulario}>
        {/* Inputs  */}

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturarData}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu email"
          name="email"
          onChange={capturarData}
        />
        <input
          type="text"
          placeholder="Ingresa tu telefono"
          name="telefono"
          onChange={capturarData}
        />
        {/* SELECT  */}

        <select onChange={handleSelect}>
          <option label="uno" value={"one"} />
          <option label="dos" value={"two"} />
          <option label="tres" value={15} />
        </select>
        {/* RADIO Buttons  */}

        <label>casa</label>
        <input
          type="radio"
          name="entidad"
          onChange={handleRadio}
          value="casa"
        />
        <label>avion</label>
        <input
          type="radio"
          name="entidad"
          onChange={handleRadio}
          value="avion"
        />

        {/* RADIO Buttons  */}
        <label>rojo</label>
        <input type="checkbox" value={"rojo"} onChange={handleCheckbox} />
        <label>azul</label>
        <input type="checkbox" value={"azul"} onChange={handleCheckbox} />
        <label>verde</label>
        <input type="checkbox" value={"verde"} onChange={handleCheckbox} />
        <label>amarillo</label>
        <input type="checkbox" value={"amarillo"} onChange={handleCheckbox} />

        {/* BOTONES  */}

        <button>enviar</button>
        <button type="button">cancelar</button>
      </form>

      {/* <button onClick={() => sumar(10, 5)}>sumar</button> */}
      {/* <button onClick={sumar}>sumar</button> */}
    </div>
  );
};

export default Checkout;
