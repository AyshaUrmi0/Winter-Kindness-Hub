import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";

import DonationCampaignsPage from "../components/Donation/DonationCampaignsPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../layouts/Login";
import Register from "../layouts/Register";

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
        element:<h1>Error</h1>
    },

])

export default router;
