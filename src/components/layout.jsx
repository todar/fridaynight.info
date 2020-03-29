/**
 * This component is persisted through the custom _app.js.
 * The purpose of this component is to keep the main navbar at the bottom
 * of each page for navigation and the placement of the rest of the app above.
 */
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e1f20",
      light: "#4b4b4c",
      dark: "#151516"
    },
    secondary: {
      main: "#ffd600",
      light: "#ffde33",
      dark: "#b29500"
    }
  }
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Navbar />
    </ThemeProvider>
  );
};

export default Layout;
