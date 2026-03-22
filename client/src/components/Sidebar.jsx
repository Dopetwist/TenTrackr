import { Link } from "react-router";

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>TenTrackr</h1>

            <div className="sidebar-contents">
                <Link smooth to={"/dashboard"} className="sidebar-item">Dashboard</Link>
                <Link smooth to={"/tenants"} className="sidebar-item">Tenants</Link>
                <Link smooth to={"/properties"} className="sidebar-item">Properties</Link>
                <Link smooth to={"/register"} className="sidebar-item">Register Tenant</Link>
                <Link smooth to={"/emails"} className="sidebar-item">Emails</Link>
                <Link smooth to={"/settings"} className="sidebar-item">Settings</Link>
                <Link smooth to={"/logout"} className="sidebar-item">Logout</Link>
            </div>
        </div>
    )
}

export default Sidebar;