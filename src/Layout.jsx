import Navbar from "./components/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  return(
      <div>
          <header>
              <Navbar/>
          </header>
          <main>
              <Outlet/>
          </main>
          <Footer/>
      </div>
  )
}

export default Layout