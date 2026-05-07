import Home from "./pages/Home.jsx";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Certifications from "./pages/Certifications.jsx";
import Projects from "./pages/Projects.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <header className={"fixed z-1"}>
                <Navbar/>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/certifications" element={<Certifications/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        <Analytics/>
        <SpeedInsights/>
    </>
  )
}

export default App
