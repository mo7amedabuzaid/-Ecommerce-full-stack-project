import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./index.css";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const theme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
