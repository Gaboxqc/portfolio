import { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import useLanguage from "../../hooks/useLanguage.jsx";

const SectionsNav = () => {
    const { translate } = useLanguage();
    const { pathname } = useLocation();
    const navRef = useRef(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    const links = [
        { name: translate("navbar.home"), path: "/" },
        { name: translate("navbar.courses"), path: "/courses" },
        { name: translate("navbar.projects"), path: "/projects" }
    ];

    useEffect(() => {
        const activeEl = navRef.current?.querySelector('[data-active="true"]');
        if (!activeEl) return;

        setIndicator({
            left: activeEl.offsetLeft,
            width: activeEl.offsetWidth
        });
    }, [pathname]);

    return (
        <div ref={navRef} className="relative h-10 flex items-center">

            <motion.div
                className="absolute inset-y-0 -z-10 rounded-full bg-linear-to-r from-primary/60 to-accent/60"
                animate={indicator}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}/>

            {links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    data-active={pathname === link.path}
                    className={({ isActive }) =>
                        `px-4 py-2 text-md font-medium transition-colors duration-300
                        ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`
                    }>
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
};

export default SectionsNav;