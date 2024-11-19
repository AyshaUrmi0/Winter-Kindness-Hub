import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div>
           <header>
            <Navbar />
           </header>
            <Outlet />
        </div>
    );
};

export default AuthLayout;