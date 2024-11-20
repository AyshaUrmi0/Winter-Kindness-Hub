
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Sign-In successful!");
        navigate(location?.state ? location?.state : '/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-80">
        <h2 className="mb-6 text-2xl font-bold text-center">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-end mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-red-300 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 mt-4 text-white bg-red-300 rounded-lg hover:bg-red-100 "
        >
          Sign in with Google
        </button>
        <p className="mt-4 text-sm font-semibold text-center text-gray-600">Do not have an account? <Link className="text-blue-600" to="/auth/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;





