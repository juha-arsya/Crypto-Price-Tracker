import { Link, useLocation, Navigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";
import { useAuth } from "./AuthContext"; // Update the path to AuthContext

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Redirect to login page after logout
    return <Navigate to="/login" />;
  };

  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor-pointer">
          <LogoIcon />
          <p className="font-semibold">
            <span className="text-yellow-500">C</span>ypto
            <span className="text-yellow-500">P</span>rice
            <span className="text-yellow-500">T</span>racker
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 cursor-pointer">
        <div className="font-semibold text-sm">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </div>

        <div className="font-semibold text-sm">
          <Link
            to="/Trending"
            className={location.pathname === "/" ? "active" : ""}
          >
            Trending
          </Link>
        </div>

        <div className="font-semibold text-sm">
          <Link
            to="/about"
            className={location.pathname === "/" ? "active" : ""}
          >
            About
          </Link>
        </div>

        <button className="bg-gray-600 w-full h-8 px-3 font-semibold rounded-md text-white mr-3 text-sm">
          {isAuthenticated && (
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
