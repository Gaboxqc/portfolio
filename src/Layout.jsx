import Navbar from "./components/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./components/Footer.jsx";
import LanguageProvider from "./context/LanguageContext.jsx";
import {useScrollRestoration} from "./hooks/useScrollRestoration.jsx";
import {useRef} from "react";

const Layout = () => {
    useScrollRestoration()
    return (
        <LanguageProvider>
            <div>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </LanguageProvider>
    );
};

export default Layout;