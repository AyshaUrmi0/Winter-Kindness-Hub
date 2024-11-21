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
import MainLayout from '../components/MainLayOut';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, 
        children: [
            { path: "/", element: <Home /> },
            { path: "/donation-campaigns", loader: () => fetch('/data/campaigns.json'), element: <DonationCampaignsPage /> },
            { path: "/donation-campaigns/:id", loader: () => fetch(`/data/campaigns.json`), element: <PrivateRoute><DonationDetails /></PrivateRoute> },
            { path: "/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
            { path: "/dashboard/update-profile", element: <PrivateRoute><UpdateProfile /></PrivateRoute> },
            { path: "/how-to-help", element: <HowToHelp /> },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />, 
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "forget-password", element: <ForgetPassword /> },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />, 
    },
]);

export default router;
