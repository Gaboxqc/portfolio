import logoIcon from '../../assets/Logo.svg'
import flatArrowIcon from '../../assets/FlatArrow.svg'
import {NavLink} from "react-router";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect( () => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
    }, [])

    const languages = [
        {code: "ES", name: "Español", flag: "🌏"},
        {code: "EN", name: "English", flag: "US"},
        {code: "DE", name: "Deutsch", flag: "DE"},
    ]
    return (
        <nav className={`w-screen grid px-10 items-center min-h-20 fixed z-1 transition-all duration-500 ease-in-out ${isScrolled 
            ? "grid-cols-1" 
            : "bg-background grid-cols-2 md:grid-cols-3"}`}>
            <div className={`items-center ${isScrolled ? "hidden" : "flex"}`}>
                <img src={logoIcon} alt="Logo" className={"h-11 w-11"}/>
                <p className={"font-bold"}>Portafolio</p>
            </div>
            <div className={`md:flex md:justify-center transition-all duration-500 ease-in-out ${isScrolled ? "block" : "hidden"}`}>
                <ul className={`flex justify-center gap-5 md:w-full md:max-w-xs transition-all duration-500 ease-in-out ${isScrolled 
                    ? "border py-2 rounded-full bg-card/60 backdrop-blur-md shadow-lg shadow-black/20" 
                    : ""}`}>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/certifications">Certificaciones</NavLink></li>
                    <li><NavLink to="/projects">Proyectos</NavLink></li>
                </ul>
            </div>
            <div className={`items-center gap-4 justify-self-end ${isScrolled ? "hidden" : "flex"}`}>
                <button className={"h-10 w-auto px-4 outline-1 rounded-lg bg-primary/10 hover:bg-primary/20 flex justify-center items-center"}>
                    🌏 {languages[1].flag}
                    <img src={flatArrowIcon} alt="Arrow" className={"h-4 w-4"}/>
                </button>
                <button className={"h-10 w-auto px-4 outline-1 rounded-lg bg-primary/10 hover:bg-primary/20"}>CV</button>
            </div>
        </nav>
    )
}

export default Navbar