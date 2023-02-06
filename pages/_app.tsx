import { AppProps } from "next/app";
import { ThemeProvider, createTheme, debounce } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

import { store, persistor } from "../state";

import "../styles/index.css";
import "../styles/MatUIOverride.css";
import { PersistGate } from "redux-persist/integration/react";

const MatUITheme = createTheme({
  typography: {
    fontFamily: ["Futura Std", "sans-serif"].join(","),
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={MatUITheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
