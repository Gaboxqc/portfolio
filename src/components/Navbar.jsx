import {Link, NavLink} from "react-router";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import SectionsNav from "./sections/SectionsNav.jsx";
import LanguageSelector from "./ui/LanguageSelector.jsx";
import useLanguage from "../hooks/useLanguage.jsx";
import {LogoIcon} from "../assets/icons/index.js";
import cv from '../../public/Curriculum Gabriel Mayorga.pdf'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const {translate} = useLanguage()

    const sections = [
        {title: translate("navbar.home"), url: "/"},
        {title: translate("navbar.courses"), url: "/courses"},
        {title: translate("navbar.projects"), url: "/projects"}
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav
            className={`w-screen grid px-10 items-center min-h-20 fixed transition-all duration-500 ease-in-out ${isScrolled
                ? "grid-cols-1 z-2"
                : "bg-background/40 grid-cols-2 md:grid-cols-3"}`}>
            <div className={`items-center ${isScrolled ? "hidden" : "flex"}`}>
                <LogoIcon className={"h-11 w-11"}/>
                <Link to={"./"}>
                    <p className={"font-bold"}>{translate("navbar.portfolio")}</p>
                </Link>
            </div>
            <div className={`md:flex justify-center items-center  ${isScrolled ? "flex" : "hidden"}`}>
                <ul
                    className={`flex h-12 justify-center items-center gap-5 lg:max-w-3xl md:max-w-xs transition-all duration-500 ease-in-out ${isScrolled
                        ? "border rounded-full bg-card/60 backdrop-blur-md shadow-lg shadow-black/20 "
                        : ""}`}>
                    {isScrolled ? <SectionsNav/> : (
                        <motion.div
                            initial={{scale: 1.1}}
                            whileInView={{scale: 1}}
                            transition={{type: "spring"}}
                            className={"flex justify-between"}
                        >
                            {sections.map((s) => {
                                return (
                                    <li>
                                        <NavLink key={s.url} to={s.url} className={({isActive}) =>
                                            `${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                                                 rounded-md px-4 py-2 text-md font-medium`
                                        }>
                                            {s.title}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </motion.div>
                    )}
                </ul>
            </div>
            <div className={`items-center gap-4 justify-self-end ${isScrolled ? "hidden" : "flex"}`}>
                <LanguageSelector/>
                <a href={cv} download={"Gabriel Mayorga CV"}
                   className={"h-10 w-auto px-4 flex justify-center items-center outline-1 rounded-lg bg-primary/10 hover:bg-primary/20 cursor-pointer"}>
                    CV
                </a>
            </div>
        </nav>
    )
}

export default Navbar