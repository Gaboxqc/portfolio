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
            <header>
                <Navbar/>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/certifications" element={<Certifications/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
            <Footer/>
            <div className={"bg-primary/20 size-100 rounded-full blur-3xl fixed bottom-1/2 right-1/2 " +
                "animate-pulse [animation-duration:3s] -z-1 xl:right-0"}></div>
            <div className={"bg-accent/20 size-100 rounded-full blur-3xl fixed top-1/2 left-1/3 delay-150 " +
                "animate-pulse [animation-duration:3s] [animation-delay:1.5s] -z-1"}></div>
        </BrowserRouter>
        <Analytics/>
        <SpeedInsights/>
    </>
  )
}

export default App
