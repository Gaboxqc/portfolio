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

      <ScrollRestoration />
    </LanguageProvider>
  );
};

export default Layout;