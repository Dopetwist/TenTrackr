import GetStartedButton from "./GetStartedButton";
import Navbar from "./Navbar";

function Header() {
    return (
        <section className="header">
            <div className="app-name">
                <h1>TenTrackr</h1>
            </div>

            <Navbar />

            <GetStartedButton />
        </section>
    )
}

export default Header;