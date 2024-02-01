import Info from "./Info.jsx";
import "./Feed.css";
import Grid from "@mui/material/Grid";
import Song from "./music/spaceship.wav"
import {spaceship, nettspend,kencarson ,EP1_01} from "./music"
const info = [
  {
    name: "SP4CESHIP.wav",
    author: "purpiedurpie",
    src: spaceship
  },
  {
    name: "DR1LL3R.OGG",
    author: "trashcodagama",
    src: nettspend
  },
  {
    name: "D4C.wav",
    author: "righteous24",
    src: kencarson
  },
  {
    name: "P3NTH0USE.mp3",
    author: "shordywav22",
    src: EP1_01
  }
];

const feed_info = info.map(el => (
  <Info author={el.author} name= {el.name} src = {el.src} />
))
export default function Feed() {
  return (
    <div className="Main">
        <Grid container spacing ={3}>
          <Grid item xs={12}>
      <center>
            <h1 className="WHITE">BRING YOUR SAMPLES TO LIFE.</h1>
      </center>
          </Grid>
          {feed_info}
          </Grid>
    </div>
  );
}
