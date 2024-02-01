import Info from "./Info.jsx";
import './Feed.css'

export default function Feed() {
    const info = [];
    info[0] = "Hi my name is carmen winstead.";
    info[1] = "Hi my name is vedant.";
    info[2] = "Hi my name is dbghurvthalur.";

    return (
        <div className="Main">
      <div className="Card">
        <Info description = {info[0]} />
      </div>
    </div>
  );
}
