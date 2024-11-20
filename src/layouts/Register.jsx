import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const name = formData.get("name");
    const photo_url = formData.get("photo_url");
    const password = formData.get("password");

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setPasswordError("");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        user
          .updateProfile({
            displayName: name,
            photoURL: photo_url,
          })
          .then(() => {
            setUser(user);
            toast.success("Registration successful!");
            navigate("/");
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="mb-6 text-2xl font-bold text-center">Register Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo_url" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              id="photo_url"
              name="photo_url"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Photo URL"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} 
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 flex items-center text-gray-600 right-3 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)} 
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>
          </div>

          {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}

          <button className="w-full py-2 mt-4 text-white bg-red-400 rounded-lg hover:bg-red-100 btn">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm font-semibold text-center text-gray-600">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/auth/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
