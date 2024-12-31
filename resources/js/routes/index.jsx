import { createBrowserRouter } from "react-router";
import PathConstants from "./PathConstants";
import React from "react";
import Layout from "../Layout";

const DashboardPage = React.lazy(() => import("../pages/DashboardPage"));
const UserPage = React.lazy(() => import("../pages/UserPage"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: PathConstants.HOME,
                element: <DashboardPage />,
            },
            {
                path: PathConstants.USERS,
                element: <UserPage />,
            }
        ]
    }
]);

export default routes;
