import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../Pages/HomePage";

import DestinationDetails from "../Pages/DestinationDetails";
import LogIn from "../Authentication/LogIn";
import Registration from "../Authentication/Registration";

const Router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/destination/:id",
                element:<DestinationDetails></DestinationDetails>,
                loader: ()=> fetch("/data.json")
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])

export default Router;