import { ThemeProvider } from "styled-components";

import { Header } from "./components/header";
import { LoadingGlobal } from "./components/loadingGlobal";

import { UseLoading } from "./context/loading";
import { UseTheme } from "./context/theme";

import { Home } from "./Pages/home";

import CreateGlobalStyle from "./styles/createGlobalStyle";

function App() {
  const { theme } = UseTheme();
  const { loading } = UseLoading();

  return (
    <ThemeProvider theme={theme}>
      <CreateGlobalStyle />
      <Header />
      <Home />

      {loading !== 0 && <LoadingGlobal />}
    </ThemeProvider>
  );
}

export default App;
