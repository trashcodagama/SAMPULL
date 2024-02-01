import "./Info.css";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ButtonGroup from "@mui/material/ButtonGroup";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReactPlayer from "react-player";
import Song from "./music/spaceship.wav";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";


export default function Info({name, author, src}) {
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
    <Grid item xs={12} md={6} lg={3}>

    <div className="Cardlike">
      <ThemeProvider theme={theme}>
        <center>
          <h3>{name}</h3>
          <h5 className ="ORANGE">{author}</h5>
          <br />
          <br />
          <ReactPlayer
            url={src}
            pip="false"
            controls="true"
            width="80%"
            height="2.5rem"
          />
          <br />
          <Button>
            <FavoriteIcon />
          </Button>
          <Button>
            <CommentIcon />
          </Button>
        </center>
      </ThemeProvider>
    </div>
    </Grid>
  );
}
