import { createBrowserRouter, redirect } from "react-router";
import App from "./app/App";
import About from "./user/about";
import Blog from "./user/blog";
import Projects from "./user/projects";
import ContactMe from "./user/contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                loader: () => redirect('/about')
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact-me",
                element: <ContactMe />
            },
        ]
    },
])

export default router