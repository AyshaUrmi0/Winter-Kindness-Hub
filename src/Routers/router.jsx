import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import DonationCampaign from "../components/Donation/DonationCampaign";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/donation",
        element:<DonationCampaign></DonationCampaign>
    },
    {
        path:"auth",
        element:<h1>Login page</h1>
    },
    {
        path:"*",
        element:<h1>Error</h1>
    },

])

export default router;
