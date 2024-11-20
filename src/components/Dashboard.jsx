import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
   
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate("/dashboard/update-profile");
    };

    return (
        <div>
            <Navbar></Navbar>
        
        <div className="items-center p-20 m-12 bg-white rounded-lg shadow-lg dashboard">
            <h1 className="items-center justify-center text-3xl font-bold">Welcome, {user?.displayName || "User"}!</h1>
            <div className="p-5 m-5 profile-info">
                <img src={user?.photoURL || "/default-avatar.png"} alt="User Avatar" className="avatar" />
                <p className="mb-5"><strong>Name:</strong> {user?.displayName || "Not provided"}</p>
                <p className="mb-5"><strong>Email:</strong> {user?.email}</p>
                <button className="mb-3 text-black bg-red-400 hover:bg-red-100 btn " onClick={handleUpdateProfile}>
                    Update Profile
                </button>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
