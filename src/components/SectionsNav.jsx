import {NavLink} from "react-router";
import {motion} from 'framer-motion';
import useLanguage from "../hooks/useLanguage.jsx";

const SectionsNav = () => {

    const {translate} = useLanguage()

    const links = [
        {name: translate("navbar.home"), path: "/"},
        {name: translate("navbar.courses"), path: "/courses"},
        {name: translate("navbar.projects"), path: "/projects"}
    ]
    return (
        <motion.div
            initial={{scale: 0.9}}
            whileInView={{scale: 1}}
            transition={{type: "spring"}}>
            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({isActive}) =>
                        `easy-in-out ${ isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground' } relative z-10 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300`
                    }
                >
                    {({isActive}) => (
                        <>
                            {/* Texto del link */}
                            <span>{link.name}</span>

                            {/* Fondo animado deslizante */}
                            {isActive && (
                                <motion.div
                                    layoutId="active-nav-bg"
                                    className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-primary/60 to-accent/60"
                                    transition={{type: 'spring', stiffness: 380, damping: 30}}
                                />
                            )}
                        </>
                    )}
                </NavLink>
            ))}
        </motion.div>
    )
}

export default SectionsNav