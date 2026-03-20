function TenantDetails() {
    return (
        <div id="details-container">
            <h2>Tenant Details</h2>

            <div className="info-section">
                <div className="name-btns">
                    <h1 className="name">John Doe</h1>

                    <div className="details-btns">
                        <button className="edit-btn">Edit Tenant</button>
                        <button className="send-email">Send Email</button>
                        <button className="delete-btn">Delete Tenant</button>
                    </div>
                </div>

                <p>Property: </p>
                <p>Room: </p>
                <p>Email: </p>
                <p>Phone: </p>
                <p>Rent: </p>
                <p>Move-in Date: </p>
                <p>Lease End: </p>
            </div>

            <div className="document-section">
                <div className="uploaded">
                    <p className="docs-header"> Uploaded Documents </p>

                    <p>- ID Card</p>
                    <p>- Lease Agreement</p>
                    <p>- Payment Receipt</p>
                </div>
            </div>
        </div>
    )
}

export default TenantDetails;