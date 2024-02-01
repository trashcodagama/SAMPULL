import Info from "./Info.jsx";
import './Feed.css'


export default function Feed() {
  return (
    <div className="Main">
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
