import {NavLink} from "react-router";
import { motion } from 'framer-motion';
import useLanguage from "../hooks/useLanguage.jsx";

const SectionsNav = () => {

    const {translate} = useLanguage()

    const links = [
        {name: translate("navbar.home"), path: "/"},
        {name: translate("navbar.courses"), path: "/courses"},
        {name: translate("navbar.projects"), path: "/projects"}
    ]
    return (
        <div>
            {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 easy-in-out z-10 ${
              isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Texto del link */}
              <span>{link.name}</span>

              {/* Fondo animado deslizante */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-bg"
                  className="absolute inset-0 bg-linear-to-r from-primary/60 to-accent/60 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
        </div>
    )
}

export default SectionsNav