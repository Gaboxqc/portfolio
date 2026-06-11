import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {createBrowserRouter, RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

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

                <div>
                    <div className={"pointer-events-none fixed right-1/2 bottom-1/2 -z-10 size-100 rounded-full bg-primary/20 blur-3xl " +
                            "animate-pulse [animation-duration:3s] xl:right-0"}>
                    </div>
                    <div
                        className={"pointer-events-none fixed top-1/2 left-1/3 -z-10 size-100 rounded-full bg-accent/20 blur-3xl delay-150 " +
                            "animate-pulse [animation-duration:3s] [animation-delay:1.5s]"}>
                    </div>
                </div>

                <Analytics/>
                <SpeedInsights/>
            </QueryClientProvider>
        </>
    );
}

export default App;
