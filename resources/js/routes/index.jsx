import { createBrowserRouter } from "react-router";
import PathConstants from "./PathConstants";
import React from "react";
import Layout from "../Layout";

const Home = React.lazy(() => import("../components/dashboard/Home"));
const Users = React.lazy(() => import("../components/users/Users"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: PathConstants.HOME,
                element: <Home />,
            },
            {
                path: PathConstants.USERS,
                element: <Users />,
            }
        ]
    }
]);

export default routes;
