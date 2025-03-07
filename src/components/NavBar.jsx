import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import axios from "axios";
import { User, Users, Bell, LogOut } from "lucide-react";
import logo2 from "../assets/logo2.png";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      return navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="bg-rose-50 dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-rose-500 dark:text-rose-400">
                <img
                  src={logo2}
                  className="h-10 w-10 inline-block mr-2"
                  alt="logo"
                />
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-rose-100">
                BizzyBee
              </span>
            </Link>
          </div>
          {user && (
            <div className="flex items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300 mr-4">
                Welcome, {user.firstName}
              </span>
              <div className="relative">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={user.photoUrl}
                    alt={`${user.firstName}'s profile`}
                  />
                </button>
                {isMenuOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-rose-50 dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-rose-100 dark:hover:bg-rose-800"
                      role="menuitem"
                    >
                      <User className="mr-3 h-4 w-4" />
                      Profile
                      <span className="ml-auto bg-rose-100 text-rose-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-rose-900 dark:text-rose-300">
                        New
                      </span>
                    </Link>
                    <Link
                      to="/connections"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-rose-100 dark:hover:bg-rose-800"
                      role="menuitem"
                    >
                      <Users className="mr-3 h-4 w-4" />
                      Connections
                    </Link>
                    <Link
                      to="/requests"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-rose-100 dark:hover:bg-rose-800"
                      role="menuitem"
                    >
                      <Bell className="mr-3 h-4 w-4" />
                      Requests
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-rose-100 dark:hover:bg-rose-800"
                      role="menuitem"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
