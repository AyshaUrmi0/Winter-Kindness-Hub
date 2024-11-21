import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div>
           <header>
            <Navbar />
           </header>
            <Outlet />
            <Footer />
        </div>
    );
};

export default AuthLayout;