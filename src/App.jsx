import Home from "./pages/Home.jsx";
import { Analytics } from "@vercel/analytics/next"

function App() {

  return (
    <>
        <Home/>
        <Analytics/>
    </>
  )
}

export default App
