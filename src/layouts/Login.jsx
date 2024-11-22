import { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { userLogin, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!email) {
            alert("Please enter your email address!");
            return;
        }

        try {
            const user = await userLogin(email, password);
            alert("Login successful!");

            
            const destination = location?.state?.from?.pathname || "/";
            navigate(destination);
        } catch (error) {
            console.error("Login failed:", error);
            alert(`Error: ${error.code}`);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            alert("Google Sign-In successful!");

           
            const destination = location?.state?.from?.pathname || "/";
            navigate(destination);
        } catch (error) {
            console.error("Google Sign-In failed:", error);
            alert(`Error: ${error.message}`);
        }
    };

    const handleForgotPassword = () => {
        const email = emailRef.current?.value;

        if (!email) {
            alert("Please enter your email before resetting the password.");
            return;
        }

        navigate("/auth/forget-password", { state: { email } });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                <h2 className="mb-6 text-2xl font-bold text-center">
                    Login to Your Account
                </h2>
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
                            ref={emailRef}
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
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 text-gray-600 right-3 focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Forgot Password?
                    </button>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-semibold text-black bg-red-400 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-2 mt-4 font-semibold text-black bg-red-400 rounded-lg hover:bg-red-100"
                >
                    Sign in with Google
                </button>
                <p className="mt-4 text-sm font-semibold text-center text-gray-600">
                    Do not have an account?{" "}
                    <button
                        onClick={() => navigate("/auth/register")}
                        className="text-blue-600 hover:underline"
                    >
                        Register here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
