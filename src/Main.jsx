import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './Main.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8800",
    },
    secondary: {
      main: "#000000",
    },
  },
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <center><h1>EXPLORE NEW SOUNDS</h1>
      </center>
    </ThemeProvider>
  );
}
