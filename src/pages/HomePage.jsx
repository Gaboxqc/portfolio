import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import CertificationsSection from "../components/sections/CertificationsSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx"
import ProjectsSection from "../components/sections/ProjectsSection.jsx";


const HomePage = () => {
    return (
        <div className={"flex w-full flex-col gap-30"}>
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <CertificationsSection/>
            <ContactSection/>
        </div>
    )
}

export default HomePage