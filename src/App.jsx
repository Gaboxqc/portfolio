import Home from "./pages/Home.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Courses from "./pages/Courses.jsx";
import Projects from "./pages/Projects.jsx";
import Layout from "./Layout.jsx";

// 1. Define your routes in an array format
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <div>
        <div
          className={"bg-primary/20 size-100 rounded-full blur-3xl fixed bottom-1/2 right-1/2 -z-10 pointer-events-none " +
          "animate-pulse [animation-duration:3s] xl:right-0"}
        ></div>
        <div
          className={"bg-accent/20 size-100 rounded-full blur-3xl fixed top-1/2 left-1/3 -z-10 pointer-events-none delay-150 " +
          "animate-pulse [animation-duration:3s] [animation-delay:1.5s]"}
        ></div>
      </div>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
