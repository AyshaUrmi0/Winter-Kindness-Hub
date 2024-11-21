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
import UpdateProfile from "../components/UpdateProfile";
import HowToHelp from "../components/HowToHelp";
import ForgetPassword from "../layouts/ForgetPassword";

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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    {
        path: "/dashboard/update-profile",
        element: (
            <PrivateRoute>
             <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        ),
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
            {
                path:"forget-password",
                element:<ForgetPassword></ForgetPassword>
            }
        ]
    },
    {
        path:"/how-to-help",
        element:<HowToHelp></HowToHelp>
    },

    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    },

])

export default router;
