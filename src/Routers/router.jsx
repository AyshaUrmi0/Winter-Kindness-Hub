import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";

import DonationCampaignsPage from "../components/Donation/DonationCampaignsPage";
import AuthLayout from "../layouts/AuthLayout";

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
        path:"auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"login",
                element:<h1>Login</h1>
            },
            {
                path:"register",
                element:<h1>Register</h1>
            },
        ]
    },
    {
        path:"*",
        element:<h1>Error</h1>
    },

])

export default router;
