import { Header } from "./components/header";
import { Home } from "./Pages/home";
import CreateGlobalStyle from "./styles/createGlobalStyle";

function App() {
  return (
    <>
      <CreateGlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
