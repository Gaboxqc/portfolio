import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {createBrowserRouter, RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {motion} from "framer-motion";

import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Projects from "./pages/Projects.jsx";
import Layout from "./Layout.jsx";

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>},
            {path: "courses", element: <Courses/>},
            {path: "projects", element: <Projects/>},
        ],
    },
]);

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>

                <motion.div
                    className="fixed bottom-0 h-150 w-150  rounded-full bg-[#00D4FF] opacity-20 blur-[120px] -z-10"
                    animate={{opacity: [0.25, 0.08, 0.25], scale: [1, 0.93, 1]}}
                    transition={{duration: 2, ease: "linear", repeat: Infinity}}
                />

                <motion.div
                    className="fixed top-0 right-0 h-150 w-150 rounded-full bg-[#5B8DEF] opacity-20 blur-[120px] -z-10"
                    animate={{opacity: [0.08, 0.22, 0.08], scale: [0.93, 1, 0.93]}}
                    transition={{duration: 2, ease: "linear", repeat: Infinity}}
                />

                <Analytics/>
                <SpeedInsights/>
            </QueryClientProvider>
        </>
    );
}

export default App;
