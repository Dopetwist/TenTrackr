import PropertyAccordion from "../components/PropertyAccordion";

function Tenants() {
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
                <button id="reg-tenant">Register Tenant</button>
                <button id="send-email">Send Email</button>
            </div>

            <PropertyAccordion />
        </div>
    )
}

export default Tenants;