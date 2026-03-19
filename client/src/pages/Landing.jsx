import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function Landing() {
    return (
        <div>
            <Header />
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <HowItWorks />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Landing;