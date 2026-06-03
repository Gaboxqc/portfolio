import {Link, NavLink} from "react-router";
import {useEffect, useState} from "react";
import SectionsNav from "./SectionsNav.jsx";
import LanguageSelector from "./LanguageSelector.jsx";
import useLanguage from "../hooks/useLanguage.jsx";

import logoIcon from '../assets/Logo.svg'
import cv from '../assets/Curriculum Gabriel Mayorga.pdf'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const {translate} = useLanguage()

    useEffect( () => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={`w-screen grid px-10 items-center min-h-20 fixed transition-all duration-500 ease-in-out ${isScrolled 
            ? "grid-cols-1 z-2" 
            : "bg-background/40 grid-cols-2 md:grid-cols-3"}`}>
            <div className={`items-center ${isScrolled ? "hidden" : "flex"}`}>
                <img src={logoIcon} alt="Logo" className={"h-11 w-11"}/>
                <Link to={"./"}>
                    <p className={"font-bold"}>{translate("navbar.portfolio")}</p>
                </Link>
            </div>
            <div className={`md:flex md:justify-center transition-all duration-500 ease-in-out ${isScrolled ? "block" : "hidden"}`}>
                <ul className={`flex justify-center gap-5 lg:max-w-3xl md:max-w-xs transition-all duration-500 ease-in-out ${isScrolled
                    ? "border py-2 rounded-full bg-card/60 backdrop-blur-md shadow-lg shadow-black/20 "
                    : ""}`}>
                    {isScrolled ? <SectionsNav/> : (
                        <>
                            <li><NavLink to="/" className={`px-4 py-2 rounded-md text-sm 
                            font-medium transition-all duration-300 ease-in-out`}>{translate("navbar.home")}</NavLink></li>
                            <li><NavLink to="/certificates">{translate("navbar.certificates")}</NavLink></li>
                            <li><NavLink to="/projects">{translate("navbar.projects")}</NavLink></li>
                        </>
                    )}
                </ul>
            </div>
            <div className={`items-center gap-4 justify-self-end ${isScrolled ? "hidden" : "flex"}`}>
                <LanguageSelector/>
                <a href={cv} download={"Gabriel Mayorga CV"} className={"h-10 w-auto px-4 flex justify-center items-center outline-1 rounded-lg bg-primary/10 hover:bg-primary/20 cursor-pointer"}>
                    CV
                </a>
            </div>
        </nav>
    )
}

export default Navbar