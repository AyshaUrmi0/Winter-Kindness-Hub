import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      alert("Profile updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div> 
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-900">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-blue-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="photoURL"
              className="block mb-2 text-sm font-medium text-blue-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-black bg-red-400 rounded-md focus:outline-none focus:ring-2 hover:bg-red-100 "
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default UpdateProfile;
