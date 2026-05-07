import logoIcon from '../../assets/Logo.svg'
import flatArrowIcon from '../../assets/FlatArrow.svg'
import {Link, NavLink} from "react-router";

const Navbar = () => {
    const languages = [
        {code: "ES", name: "Español", flag: "🌏"},
        {code: "EN", name: "English", flag: "US"},
        {code: "DE", name: "Deutsch", flag: "DE"},
    ]
    return (
        <nav className={"w-screen flex justify-between px-10 items-center bg-background min-h-20"}>
            <div className={"flex items-center"}>
                <img src={logoIcon} alt="Logo" className={"h-11 w-11"}/>
                <p>Portafolio</p>
            </div>
            <div className={"hidden md:block"}>
                <ul className={"flex gap-5"}>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/certifications">Certificaciones</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                </ul>
            </div>
            <div className={"flex items-center gap-4"}>
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