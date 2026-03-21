import { useNavigate } from "react-router";
import PropertyAccordion from "../components/PropertyAccordion";

function Tenants() {
    const navigate = useNavigate();

    return (
        <div className="tenants">
            <h2>All Tenants</h2>

            <div className="search-con">
                <div className="search-icon">
                    icon
                </div>
                <input type="text" name="search" id="search" placeholder="Search tenant..." />
            </div>
            <div className="tenants-btns">
                <button id="reg-tenant"
                onClick={() => navigate("/register")}
                >
                    Register Tenant
                </button>
                <button 
                className="send-email"
                onClick={() => navigate("/emails")}
                >
                    Send Email
                </button>
            </div>

            <PropertyAccordion />
        </div>
    )
}

export default Tenants;