import { HashLink } from "react-router-hash-link";

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>TenTrackr</h1>

            <div className="sidebar-contents">
                <HashLink smooth to={"/dashboard"} className="sidebar-item">Dashboard</HashLink>
                <HashLink smooth to={"/tenants"} className="sidebar-item">Tenants</HashLink>
                <HashLink smooth to={"/properties"} className="sidebar-item">Properties</HashLink>
                <HashLink smooth to={"/register"} className="sidebar-item">Register Tenant</HashLink>
                <HashLink smooth to={"/emails"} className="sidebar-item">Emails</HashLink>
                <HashLink smooth to={"/settings"} className="sidebar-item">Settings</HashLink>
                <HashLink smooth to={"/logout"} className="sidebar-item">Logout</HashLink>
            </div>
        </div>
    )
}

export default Sidebar;