import { HashLink } from "react-router-hash-link";

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <h1>TenTrackr</h1>

                <div className="sidebar-contents">
                    <HashLink smooth to={"/dashboard"}>Dashboard</HashLink>
                    <HashLink smooth to={"/tenants"}>Tenants</HashLink>
                    <HashLink smooth to={"/properties"}>Properties</HashLink>
                    <HashLink smooth to={"/register"}>Register Tenant</HashLink>
                    <HashLink smooth to={"/emails"}>Emails</HashLink>
                    <HashLink smooth to={"/settings"}>Settings</HashLink>
                    <HashLink smooth to={"/logout"}>Logout</HashLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;