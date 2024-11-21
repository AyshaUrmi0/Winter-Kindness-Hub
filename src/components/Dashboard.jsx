import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
   
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate("/dashboard/update-profile");
    };

    return (
        <div>
           
        
            <div className="items-center p-5 m-5 bg-white rounded-lg shadow-lg dashboard">
  <h1 className="text-2xl font-bold text-center sm:text-3xl">
    Welcome, {user?.displayName || "User"}!
  </h1>
  <div className="flex flex-col items-center justify-center p-5 mt-5 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-10 profile-info">
    <img
      src={user?.photoURL || "/default-avatar.png"}
      alt="User Avatar"
      className="w-24 h-24 rounded-full sm:w-32 sm:h-32"
    />
    <div className="text-center sm:text-left">
      <p className="mb-3">
        <strong>Name:</strong> {user?.displayName || "Not provided"}
      </p>
      <p className="mb-3">
        <strong>Email:</strong> {user?.email || "Not provided"}
      </p>
      <button
        className="px-4 py-2 text-sm font-medium text-white transition bg-red-400 rounded hover:bg-red-500 sm:text-base"
        onClick={handleUpdateProfile}
      >
        Update Profile
      </button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Dashboard;
