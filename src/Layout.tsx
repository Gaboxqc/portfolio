import Navbar from "./components/Navbar";
import {Outlet} from "react-router";
import Footer from "./components/Footer";
import LanguageProvider from "./context/LanguageContext";
import {useScrollRestoration} from "./hooks/useScrollRestoration";

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
