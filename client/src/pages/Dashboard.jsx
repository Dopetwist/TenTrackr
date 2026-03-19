import Sidebar from "../components/Sidebar";

function Dashboard() {
    return (
        <div>
            <Sidebar />
            
            <h1>Dashboard</h1>

            <div className="total-tenants">
                <h2>Total Tenants</h2>
                <span>32</span>
            </div>
            <div className="total-properties">
                <h2>Total Properties</h2>
                <span>4</span>
            </div>
            <div className="documents-uploaded">
                <h2>Document Uploaded</h2>
                <span>55</span>
            </div>
            <div className="recent-tenants">
                <h2>Recent Tenants</h2>
                <span>2</span>
            </div>
        </div>
    )
}

export default Dashboard;