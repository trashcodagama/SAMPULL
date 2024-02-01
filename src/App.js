import "./App.css";
import Header from "./Header.jsx";
import Info from "./Info.jsx";
import Feed from "./Feed.jsx"
import MediaControlCard from "./MediaControl.jsx";
import Grid from "@mui/material/Grid"; // Grid version 1
import Main from "./Main.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

function App() {
  return (
    <div>
      <Header />
      <Feed />
      <Main />
    </div>
  );
}

export default App;
