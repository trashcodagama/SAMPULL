import "./Info.css";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ButtonGroup from "@mui/material/ButtonGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReactPlayer from 'react-player'
import Song from './music/spaceship.wav'
import CommentIcon from '@mui/icons-material/Comment';

export default function Info(props) {
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
  return (
    <div>
      <ThemeProvider theme={theme}>
        <center>
          <h3>
            {props.description}
            <br />
            <br />
            <ReactPlayer url= {Song} pip = "false" controls = "true" width = "100%" height="2.5rem"/>
            <br />
            <Button>
              <FavoriteIcon/>
            </Button>
            <Button>
              <CommentIcon/>
            </Button>
          </h3>
        </center>
      </ThemeProvider>
    </div>
  );
}
