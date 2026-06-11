import { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import useLanguage from "../hooks/useLanguage.jsx";

const SectionsNav = () => {
    const { translate } = useLanguage();
    const { pathname } = useLocation();
    const navRef = useRef(null);
    const indicatorRef = useRef(null);

    const links = [
        { name: translate("navbar.home"), path: "/" },
        { name: translate("navbar.courses"), path: "/courses" },
        { name: translate("navbar.projects"), path: "/projects" }
    ];

    useEffect(() => {
        const activeEl = navRef.current?.querySelector('[data-active="true"]');
        const indicator = indicatorRef.current;
        if (!activeEl || !indicator) return;

        indicator.style.left = `${activeEl.offsetLeft}px`;
        indicator.style.width = `${activeEl.offsetWidth}px`;
    }, [pathname]);

    return (
        <div ref={navRef} className="relative flex items-center">

            {/* This is the indicatorRef — the sliding pill */}
            <div
                ref={indicatorRef}
                className="absolute inset-y-0 -z-10 rounded-full bg-linear-to-r from-primary/60 to-accent/60 transition-all duration-300 ease-[cubic-bezier(0.380,0.700,0.125,1.000)]"
            />

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