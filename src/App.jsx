import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/navbar/Navbar";
import ProbandoComponents from "./components/probandoCompontes/ProbandoComponents";
import ProbandoResponsive from "./components/probandoResponsive/ProbandoResponsive";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import { themeLight } from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <ProbandoResponsive />
      <ProbandoComponents />
    </ThemeProvider>
  );
}

export default App;
