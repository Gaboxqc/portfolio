import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import CertificationsSection from "../components/sections/CertificationsSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx"
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection.jsx";


const HomePage = () => {
    return (
        <div className={"flex w-full flex-col"}>
            <HeroSection/>
            <AboutSection/>
            <FeaturedProjectsSection/>
            <CertificationsSection/>
            <ContactSection/>
        </div>
    )
}

export default HomePage