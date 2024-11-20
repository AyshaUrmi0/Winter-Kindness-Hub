import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user: contextUser, logOut } = useContext(AuthContext); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("User logged out successfully");
      })
      .catch((error) => {
        alert("Error logging out:", error);
      });
  };

  return (
    <nav className="sticky top-0 z-10 text-white bg-blue-200 shadow-lg animate__animated animate__fadeInDown">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/?size=96&id=81174&format=png"
            alt="Site Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Winter Donate</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/donation-campaigns" className="hover:text-gray-200">
            Donation Campaigns
          </Link>
          <Link to="/how-to-help" className="hover:text-gray-200">
            How to Help
          </Link>
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
        </div>

       
        <div className="flex items-center space-x-4">
          {contextUser ? (
            <div className="flex items-center space-x-4">
              
              <div className="items-center hidden space-x-4 md:flex">
                <img
                  src={contextUser.photoURL || "https://i.ibb.co/cC64wKF/img-avatar2.png"}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="bg-red-400 hover:bg-red-100 btn"
                >
                  Logout
                </button>
              </div>

              
              <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={contextUser.photoURL || "https://i.ibb.co/cC64wKF/img-avatar2.png"}
                      alt="User Profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="p-2 mt-3 text-gray-800 bg-white shadow menu menu-compact dropdown-content rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="bg-red-400 hover:bg-red-100 btn"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/auth/login" className="bg-red-400 btn">
              Login
            </Link>
          )}
        </div>

       
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="p-4 space-y-4 bg-blue-400 md:hidden">
          <Link to="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link to="/donation-campaigns" className="block hover:text-gray-200">
            Donation Campaigns
          </Link>
          <Link to="/how-to-help" className="block hover:text-gray-200">
            How to Help
          </Link>
          <Link to="/dashboard" className="block hover:text-gray-200">
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
