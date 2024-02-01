import Info from "./Info.jsx";
import "./Feed.css";
import Grid from "@mui/material/Grid";
import Song from "./music/spaceship.wav"
import {spaceship} from "./music"
const info = [
  {
    name: "SP4CESHIP.wav",
    author: "purpiedurpie",
    src: {spaceship}
  },
  {
    name: "DR1LL3R.OGG",
    author: "trashcodagama",
    src: "./music/EP1_01.wav"
  },
  {
    name: "D4C.wav",
    author: "righteous24",
    src: "./music/nettspend.wav"
  },
  {
    name: "P3NTH0USE.mp3",
    author: "shordywav22",
    src: "./music/ninow bornw.wav"
  }
];

const feed_info = info.map(el => (
  <Info subtitle={el.author} name= {el.name} songsrc = {el.src} />
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
