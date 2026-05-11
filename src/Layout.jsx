import Navbar from "./components/navbar/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./components/footer/Footer.jsx";

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