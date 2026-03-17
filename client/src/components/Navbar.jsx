import { HashLink } from "react-router-hash-link";

function Navbar() {
    return (
        <nav id="navbar">
            <HashLink smooth className="nav-link" to="/#features">Features</HashLink>
            <HashLink smooth className="nav-link" to="/#howitworks">How it Works</HashLink>
            <HashLink smooth className="nav-link" to="/#login">Login</HashLink>
        </nav>
    )
}

export default Navbar;