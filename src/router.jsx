import { createBrowserRouter, redirect } from "react-router";
import App from "./app/App";
import About from "./user/about";




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
            }
        ]
    },
])

export default router