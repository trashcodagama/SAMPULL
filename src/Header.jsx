import "./Header.css";

export default function Header(){
    return (
        <div className = "Banner">
            <div className = "Text">
                <h1>sampull</h1>
            </div>
            <div className ="Menu">
                <div className = "Options">BROWSE</div>
                <div className = "Options">UPLOAD</div>
                <div className = "Options">LOGIN</div>

            </div>
        </div>
    )
}