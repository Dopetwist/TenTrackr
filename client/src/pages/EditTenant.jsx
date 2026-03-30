import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";

function EditTenant() {
   /*  const { id } = useParams(); */

    const location = useLocation();
    const navigate = useNavigate();

    const [ properties, setProperties ] = useState([]);

    const [ toast, setToast ] = useState(null); // toast state

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        property: "",
        room: "",
        currency: "",
        rent: "",
        move_in: "",
        lease_end: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put("http://localhost:5000/api/tenants/edit/:id", formData);

            // Show success toast
            setToast({
                message: "Details updated successfully!",
                type: "success"
            });

            // Clear form on success
            setFormData({ 
                full_name: "", 
                email: "", 
                phone: "",
                property: "",
                room: "",
                currency: "NGN",
                rent: "",
                move_in: "",
                lease_end: ""
            });

            // Redirect to tenant details page after short delay
            setTimeout(() => {
                navigate(`/tenants/${res.data.id}`);
            }, 2000);

        } catch (err) {
            // Show error toast
            setToast({
                message: err.response?.data?.error || "Something went wrong",
                type: "error"
            });
            console.error(err.response?.data || err.message);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (location.state) {
            const tenant = location.state;

            setFormData({
                ...tenant,
                property: tenant.property_id, // Tenant property_id field
                room: tenant.room_number,
                rent: tenant.rent_amount,
                move_in: tenant.move_in_date
            });
        }
    }, [location.state]);

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


    return (
        <div className="edit-container">
            <h2>Edit Tenant</h2>

            <form onSubmit={handleSubmit} className="edit-form">
                <div className="edit-form-sub">
                    <label> Name: </label>
                    <input 
                    type="text" 
                    name="full_name" 
                    value={formData.full_name} 
                    onChange={handleChange} 
                    />
                </div>
                
                <div className="edit-form-sub">
                    <label>Email:</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    />  
                </div>  
                
                <div className="edit-form-sub">
                    <label>Phone:</label>
                    <input 
                    type="number" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} />
                </div>   
                 
                <div className="edit-form-sub">
                    <label>Property:</label>
                    <select 
                    name="property" 
                    id="properties" 
                    value={formData.property} 
                    onChange={handleChange}
                    >
                        {properties.length === 0 ? (
                            <option value={""} disabled>Loading properties...</option>
                        ) : (
                            properties.map(prop => (
                                <option key={prop.id} value={prop.id}>
                                    {prop.property_name}
                                </option>
                            ))
                        )}
                    </select>
                </div>
                    
                <div className="edit-form-sub">
                    <label>Room:</label>
                    <input
                    name="room" 
                    value={formData.room} 
                    onChange={handleChange} />    
                </div>
                
                <div className="edit-form-sub">
                    <label>Rent:</label>
                    <div className="rent-con">
                        <select
                        name="currency" 
                        id="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        >
                            <option value={"USD"}>$</option>
                            <option value={"EUR"}>€</option>
                            <option value={"GBP"}>£</option>
                            <option value={"NGN"}>₦</option>
                        </select>
                        <input 
                        type="number" 
                        name="rent" 
                        value={formData.rent} 
                        onChange={handleChange} />
                    </div>
                </div>
                
                <div className="edit-form-sub">
                    <label>Move-in Date:</label>
                    <input 
                    type="date" 
                    name="move_in" 
                    value={formData.move_in} 
                    onChange={handleChange} />
                </div>
                    
                <div className="edit-form-sub">
                    <label>Lease End:</label>
                    <input 
                    type="date" 
                    name="lease_end" 
                    value={formData.lease_end} 
                    onChange={handleChange} />
                </div>

                <div className="edit-form-btns">
                    <button type="submit" id="saveButton">Save</button>
                    <button 
                    type="button"
                    id="cancelButton"
                    onClick={() => navigate(`/tenants/${formData.id}`)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditTenant;