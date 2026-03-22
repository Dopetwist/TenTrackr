function Settings() {
    return (
        <div id="settings-section">
            <h2>Settings</h2>
            
            <div className="settings-container">
                <div className="settings-box">
                    <p className="settings-title">Account name:</p>
                    <p>John Doe (pencil edit icon)</p>
                </div>
                <div className="settings-box">
                    <p className="settings-title">Email:</p>
                    <p>john@gmail.com (pencil edit icon)</p>
                </div>
                <div className="settings-box">
                    <p className="settings-title">Change Password:</p>
                    <p>1234567890 (pencil edit icon)</p>
                </div>
            </div>
        </div>
    )
}

export default Settings;