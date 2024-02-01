import Info from './Info.jsx'
import bg from "./images/wallpaperflare.com_wallpaper.jpg";


export default function Feed(){
    return (
        <div className="Main" style={{ backgroundImage: `url(${bg})` }}>
        <div className="Card">
          <Info
            description="Hi my name is vedant, this is cool."
            button="Craaz"
          />
          <Info
            description="Hi my name is vedant, this is cool."
            button="Craaz"
          />
          <Info
            description="Hi my name is vedant, this is cool."
            button="Craaz"
          />
        </div>
        </div>
    );
}