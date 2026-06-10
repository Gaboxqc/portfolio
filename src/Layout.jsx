import Navbar from "./components/Navbar.jsx";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./components/Footer.jsx";
import LanguageProvider from "./context/LanguageContext.jsx";

const Layout = () => {
  return (
    <LanguageProvider>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

      <ScrollRestoration getKey={(location, matches) => {
            return location.key;
        }} />
    </LanguageProvider>
  );
};

export default Layout;