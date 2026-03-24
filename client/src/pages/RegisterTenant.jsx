import axios from "axios";

function RegisterTenant() {
     const [ formData, setFormData ] = useState({
        full_name: "",
        email: "",
        phone: "",
        room: "",
        rent: "",
        move_in: "",
        lease_end: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/tenants", formData);

            console.log("Tenant created:", res.data);

            // Optional: clear form
            setFormData({ 
                full_name: "", 
                email: "", 
                phone: "",
                room: "",
                rent: "",
                move_in: "",
                lease_end: ""
            });

        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <div id="register-section">
            <h2> Register Tenant </h2>

            <div className="register-container">
                <form onSubmit={handleSubmit} className="register-form">

                    <label htmlFor="full-name">Full Name:</label>
                    <input 
                        type="text" 
                        name="full_name" 
                        id="full-name" 
                        placeholder="Enter full name"
                        value={formData.full_name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter a valid email address"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="phone-number">Phone Number:</label>
                    <input 
                        type="number" 
                        name="phone" 
                        id="phone-number" 
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange} 
                    />

                    <label htmlFor="properties">Choose a property: </label>
                    <select name="properties" id="properties">
                        <option value={""}>-- Select Property --</option>
                        <option value={"greenvalley"}>Greenvalley Apartment</option>
                        <option value={"risingstars"}>RisingStars Suites</option>
                        <option value={"decape"}>DeCape Apartment</option>
                    </select>

                    <div className="inner-div">
                        <div className="small-input">
                            <label htmlFor="room-number">Room Number:</label>
                            <input 
                                name="room" 
                                id="room-number" 
                                placeholder="Enter room number"
                                value={formData.room}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="small-input">
                            <label htmlFor="rent-amount">Rent Amount:</label>
                            <input 
                                type="number" 
                                name="rent" 
                                id="rent-amount" 
                                placeholder="Enter rent amount"
                                value={formData.rent}
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="small-input">
                            <label htmlFor="move-in">Move-In Date:</label>
                            <input 
                                type="date" 
                                name="move_in" 
                                id="move-in"
                                value={formData.move_in}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="small-input">
                            <label htmlFor="lease-end">Lease End Date:</label>
                            <input 
                                type="date" 
                                name="lease_end" 
                                id="lease-end"
                                value={formData.lease_end}
                                onChange={handleChange} 
                            />
                        </div>
                    </div>

                    <label htmlFor="upload-doc">Upload Document:</label>
                    <input type="file" id="upload-doc" />

                    <div className="register-btns">
                        <button type="submit" id="save">Save Tenant</button>
                        <button id="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterTenant;