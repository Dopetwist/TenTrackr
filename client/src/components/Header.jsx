import GetStartedButton from "./GetStartedButton";
import Navbar from "./Navbar";

function Header() {
    return (
        <div className="header">
            <div className="app-name">
                <h1>TenTrackr</h1>
            </div>

            <Navbar />

            <GetStartedButton />
        </div>
    )
}

export default Header;