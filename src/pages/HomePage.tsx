import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import CertificationsSection from "../components/sections/CertificationsSection";
import ContactSection from "../components/sections/ContactSection"
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection";


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
