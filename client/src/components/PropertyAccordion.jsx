import { useEffect, useState } from "react";
import axios from "axios";

function PropertyAccordion({ tenants = [] }) {
    const [ expandedProperty, setExpandedProperty ] = useState(null);
    const [ properties, setProperties ] = useState([]);

    const toggleProperty = (propertyId) => {
        if (expandedProperty === propertyId) {
            setExpandedProperty(null);
        } else {
            setExpandedProperty(propertyId);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/properties");
                setProperties(response.data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);


    return (
        <div>
            {properties.map(property => (
                <div key={property.id}>

                    <h3 onClick={() => toggleProperty(property.id)}>
                        {property.property_name}
                    </h3>

                    {expandedProperty === property.id && (
                        <div>
                            {console.log("tenants:", tenants)}
                            {tenants
                                .filter(t => t.property_id === property.id)
                                .map(tenant => (
                                    <p key={tenant.id}>{tenant.full_name}</p>
                                ))
                            }
                        </div>
                    )}

                </div>
            ))}
            
        </div>
    )
}

export default PropertyAccordion;