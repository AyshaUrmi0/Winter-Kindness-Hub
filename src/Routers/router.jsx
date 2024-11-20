import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";

import DonationCampaignsPage from "../components/Donation/DonationCampaignsPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import ErrorPage from "../layouts/ErrorPage";
import DonationDetails from "../components/Donation/DonationDetails";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path: "/donation-campaigns",
        loader: () => fetch('/data/campaigns.json') ,
        element: <DonationCampaignsPage />,
        
    },
    {
        path: "/donation-campaigns/:id",
        loader: ({ params }) => fetch(`/data/campaigns/${params.id}.json`),
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
    },

    {
        path:"auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    },

])

export default router;
