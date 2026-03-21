function RegisterTenant() {
    return (
        <div id="register-section">
            <h2> Register Tenant </h2>

            <div className="register-container">
                <form action={"#"} method="POST">

                    <label htmlFor="full-name">Full Name:</label>
                    <input type="text" name="full_name" id="full-name" placeholder="Enter full name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter a valid email address" />

                    <label htmlFor="phone-number">Phone Number:</label>
                    <input type="number" name="phone" id="phone-number" placeholder="Enter phone number" />

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
                            <input name="room" id="room-number" placeholder="Enter room number" />
                        </div>

                        <div className="small-input">
                            <label htmlFor="rent-amount">Rent Amount:</label>
                            <input name="rent" id="rent-amount" placeholder="Enter rent amount" />
                        </div>

                        <div className="small-input">
                            <label htmlFor="move-in">Move-In Date:</label>
                            <input type="date" id="move-in" />
                        </div>

                        <div className="small-input">
                            <label htmlFor="lease-end">Lease End Date:</label>
                            <input type="date" id="lease-end" />
                        </div>
                    </div>

                    <label htmlFor="upload-doc">Upload Document:</label>
                    <input type="file" id="upload-doc" />

                    <div className="register-btns">
                        <button type="submit" id="save">Save Tenant</button>
                        <button type="submit" id="cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterTenant;