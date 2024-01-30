import './App.css';
import Header from './Header.jsx';
import Info from './Info.jsx';
import bg from './images/wallpaperflare.com_wallpaper.jpg'
import MediaControlCard from './MediaControl.jsx'
import Grid from '@mui/material/Grid'; // Grid version 1





function App() {
  return (
    <div>
    <Header />
      <div className = "Main" style = {{backgroundImage : `url(${bg})`}}>
        <div className = "Card">
          <Info/>
        </div>
      </div>
      <section>
        
        <h1>
          CURRENT SELECTIONS
        </h1>
        <MediaControlCard/>

      </section>
    </div>
  );
}

export default App;
