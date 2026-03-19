import { useNavigate } from "react-router";

function GetStartedButton() {
    const navigate = useNavigate();

    return (
        <div>
            <button className="get-started"
            onClick={() => navigate("/dashboard")}
            > 
                Get Started 
            </button>
        </div>
    )
}

export default GetStartedButton;