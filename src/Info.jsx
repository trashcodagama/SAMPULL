import "./Info.css";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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


export default function Info(props){
    return(
        <div>
            <ThemeProvider theme = {theme}>
            <h3>{props.description}
            <br/>
            <br/>
            <Button>{props.button}</Button>
            </h3>
            </ThemeProvider>
        </div>
        );
}