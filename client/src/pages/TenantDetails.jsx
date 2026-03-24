import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function TenantDetails() {
    const { id } = useParams();

    const [tenant, setTenant] = useState(null);

    useEffect(() => {
        const fetchTenant = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/tenants/${id}`);
                setTenant(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTenant();
    }, [id]);

    if (!tenant) return <p className="ten-details-loading">Loading...</p>;

    return (
        <div id="details-container">
            <h2>Tenant Details</h2>

            <div className="info-section">
                <div className="name-btns">
                    <h1 className="name">{tenant.full_name}</h1>

                    <div className="details-btns">
                        <button className="edit-btn">Edit Tenant</button>
                        <button className="send-email">Send Email</button>
                        <button className="delete-btn">Delete Tenant</button>
                    </div>
                </div>

                <p>Property: <span>{tenant.property_name}</span></p>
                <p>Room: <span>{tenant.room_number}</span></p>
                <p>Email: <span>{tenant.email}</span></p>
                <p>Phone: <span>{tenant.phone}</span></p>
                <p>Rent: <span>{tenant.rent_amount}</span></p>
                <p>Move-in Date: <span>{tenant.move_in_date}</span></p>
                <p>Lease End: <span>{tenant.lease_end}</span></p>
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