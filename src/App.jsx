import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import LoginContainer from "./pages/login/LoginContainer";

function App() {
  const [estaMontado, setEstaMontado] = useState(false);

  const montarDesmontar = () => {
    setEstaMontado(!estaMontado);
  };

  return (
    <>
      <Navbar />

      <LoginContainer />

      {estaMontado ? <ItemListContainer greeting={"Hola como estas?"} /> : null}

      <button onClick={montarDesmontar}>montar / desmontar</button>
    </>
  );
}

export default App;
