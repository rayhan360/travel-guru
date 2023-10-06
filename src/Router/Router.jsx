import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../Pages/HomePage";

import DestinationDetails from "../Pages/DestinationDetails";

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
            }
        ]
    }
])

export default Router;