
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
  const navigate=useNavigate();

  const { userLogin,setUser}=useContext(AuthContext);
  const location=useLocation();
  console.log(location);
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    
   
    alert('Form submitted');

    userLogin(email,password).then(result => {
      const user=result.user;
      setUser(user);
      navigate(location?.state ? location?.state : '/');

      
    })
    .catch(error => {
      alert(error.code);
    });

  };

  return (
    <div className="flex items-center justify-center min-h-screen p-10 bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-80">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login your Account</h2>
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
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm font-semibold text-center text-gray-600">Do not have an account? <Link className="text-blue-600" to="/auth/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
