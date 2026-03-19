function Tenants() {
    return (
        <div>
            <div className="tenants">
                <h2>All Tenants</h2>

                <div>
                    <div className="search-icon"></div>
                    <input type="text" name="search" id="search" placeholder="Search tenant..." />
                </div>
                <div className="tenants-btns">
                    <button id="reg-tenant">Register Tenant</button>
                    <button id="send-email">Send Email</button>
                </div>
            </div>
        </div>
    )
}

export default Tenants;