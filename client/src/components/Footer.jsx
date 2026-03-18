import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <div>
            <footer id="footer">
                <h3>Links</h3>

                <HashLink smooth to={"/about"} className="footer-link">About</HashLink>
                <HashLink smooth to={"/contact"} className="footer-link">Contact</HashLink>
                <HashLink smooth to={"/privacy"} className="footer-link">Privacy</HashLink>
                <HashLink smooth to={"/terms"} className="footer-link">Terms</HashLink>
            </footer>
        </div>
    )
}

export default Footer;