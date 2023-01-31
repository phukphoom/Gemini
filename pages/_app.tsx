import { AppProps } from "next/app";
import { ThemeProvider, createTheme, debounce } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

import { store } from "../state";

import { saveState } from "../state/browser-storage";
import "../styles/index.css";
import "../styles/MatUIOverride.css";

const MatUITheme = createTheme({
  typography: {
    fontFamily: ["Futura Std", "sans-serif"].join(","),
  },
});

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={MatUITheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
