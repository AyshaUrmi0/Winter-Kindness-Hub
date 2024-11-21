import { useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";
import app from "../firebase/firebase.config";

const ForgetPassword = () => {
  const location = useLocation();
  
  const auth = getAuth(app);

  const email = location.state?.email || ""; 

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
       
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-80">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Reset Your Password
        </h2>
        <form onSubmit={handleResetPassword}>
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
              defaultValue={email}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-black bg-red-400 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
