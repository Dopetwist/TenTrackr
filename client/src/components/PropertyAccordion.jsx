import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function PropertyAccordion() {

    const [ expandedProperty, setExpandedProperty ] = useState(null);
    const [ properties, setProperties ] = useState([]);
    const [ tenants, setTenants ] = useState([]);

    const navigate = useNavigate();

    const toggleProperty = (propertyId) => {
        if (expandedProperty === propertyId) {
            setExpandedProperty(null);
        } else {
            setExpandedProperty(propertyId);
        }
    };

    // Fetch All properties from backend database
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/properties");
                setProperties(res.data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchProperties();
    }, []);

    // Fetch All tenants from backend database
    useEffect(() => {
        const fetchTenants = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/tenants");
                setTenants(res.data);
            } catch (error) {
                console.error("Error fetching tenants:", error);
            }
        };

        fetchTenants();
    }, []);


    return (
        <div id="property-container">

            {properties.length > 0 && (
                <p className="your-props">Your Properties</p>
            )}

            {properties.length === 0 ? (
                <p className="loading">Loading properties...</p>
            ) : (
                    properties.map(property => (
                        <div key={property.id} className="property-item">
                            <h3 onClick={() => toggleProperty(property.id)}>
                                {property.property_name}
                            </h3>

                            {expandedProperty === property.id && (
                                <div>
                                    {tenants
                                        .filter(t => t.property_id === property.id)
                                        .map(tenant => (
                                            <div key={tenant.id} className="tenant-item">
                                                <div className="tenant-name">
                                                    <p>{tenant.full_name}</p>
                                                    <p className="phone">{tenant.phone}</p>
                                                </div>

                                                <div className="action-btns">
                                                    <button 
                                                    className="view-btn"
                                                    onClick={() => navigate("/tenantdetails")}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button className="delete-btn">Delete</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    ))
            )}
            
        </div>
    )
}

export default PropertyAccordion;