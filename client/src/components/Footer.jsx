import { Link } from "react-router";

function Footer() {
    return (
        <div>
            <footer id="footer">
                <h3>Links</h3>

                <Link to={"/about"} className="footer-link">About</Link>
                <Link to={"/contact"} className="footer-link">Contact</Link>
                <Link to={"/privacy"} className="footer-link">Privacy</Link>
                <Link to={"/terms"} className="footer-link">Terms</Link>
            </footer>
        </div>
    )
}

export default Footer;