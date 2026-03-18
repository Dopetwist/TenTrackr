import GetStartedButton from "../components/GetStartedButton";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import HowItWorks from "../components/HowItWorks";

function Landing() {
    return (
        <div>
            <section id="hero">
                <div className="hero-texts">
                    <div> 
                        <h1><span className="manage">Manage <span>Tenants</span></span></h1> <br /> 
                        <h2 className="chaos">Without the Chaos</h2> 
                    </div>
                    <p> TenTrackr helps landlords and property managers organize tenant records,
                        documents, and communication in one simple dashboard 
                    </p>

                    <div className="hero-btns">
                        <GetStartedButton /> 
                        <button className="view-demo"> View Demo </button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/hero-image.jpg" className="hero-img" alt="Hero Image" />
                </div>
            </section>

            <ProblemSection />

            <SolutionSection />

            <HowItWorks />
        </div>
    )
}

export default Landing;