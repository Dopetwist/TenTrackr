function ProblemSection() {
    return (
        <div id="problem-section">
            <h1>Still Managing Tenants With Spreadsheets?</h1>

            <div className="problem-section-cards">
                <div className="card1 problem-card">
                    <h2 className="title">Lost Tenant Records</h2>

                    <p>Tenant information scattered across notebooks and spreadsheets.</p>

                    <img src="/images/records.jpg" width={100} height={100} className="problem-img" alt="Records Image" />
                </div>
                <div className="card2 problem-card">
                    <h2 className="title">Document Confusion</h2>
                    
                    <p>Hard to track tenant agreements, IDs and uploaded files.</p>

                    <img src="/images/documents.png" width={100} height={100} className="problem-img" alt="Document Image" />
                </div>
                <div className="card3 problem-card">
                    <h2 className="title">Communication Problems</h2>

                    <p>Sending messages to tenants manually wastes time.</p>

                    <img src="/images/communication.png" width={100} height={100} className="problem-img" alt="Communication Image" />
                </div>
            </div>
        </div>
    )
}

export default ProblemSection;