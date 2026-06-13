// Navbar.jsx
import {Link} from "react-router";
import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import SectionsNav from "./sections/SectionsNav.jsx";
import LanguageSelector from "./ui/LanguageSelector.jsx";
import useLanguage from "../hooks/useLanguage.jsx";
import {LogoIcon} from "../assets/icons/index.js";
import cv from '../../public/Curriculum.pdf'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const {translate} = useLanguage()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`${isScrolled ? "grid-cols-1" : "bg-background/40 grid-cols-2 md:grid-cols-3"} fixed z-20 grid min-h-20 w-screen items-center px-2 transition-all duration-500 ease-in-out md:px-10`}>
            <div className={`${isScrolled ? " hidden " : "flex"} items-center`}>
                <LogoIcon className={"h-11 w-11"}/>
                <Link to={"/"}>
                    <p className={"font-bold"}>{translate("navbar.portfolio")}</p>
                </Link>
            </div>

            <div className="items-center justify-center md:flex">
                {isScrolled ? (
                    <motion.div key="pill" initial={{scale: 0.92}} animate={{scale: 1}} transition={{type: "spring"}}>
                        <SectionsNav pill={true}/>
                    </motion.div>
                ) : (
                    <motion.div key="inline" initial={{scale: 1.1}} animate={{scale: 1}} transition={{type: "spring"}}>
                        <SectionsNav pill={false}/>
                    </motion.div>
                )}
            </div>

            <div className={`${isScrolled ? "hidden" : "flex"} items-center gap-4 justify-self-end`}>
                <LanguageSelector/>
                <a href={cv} download={"Gabriel Mayorga CV"}
                   className={"flex h-10 w-auto cursor-pointer items-center justify-center rounded-lg bg-primary/10 px-4 outline-1 hover:bg-primary/20"}>
                    CV
                </a>
            </div>
        </nav>
    )
}

export default Navbar