import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "../styles/index.css";
import "../styles/MatUIOverride.css";

const MatUITheme = createTheme({
  typography: {
    fontFamily: ["Futura Std", "sans-serif"].join(","),
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={MatUITheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
