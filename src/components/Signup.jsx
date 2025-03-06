import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { ArrowRight, Mail, Lock, User, Heart } from "lucide-react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const Signup = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/*Left side UI */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 p-12 items-center justify-center">
        <div className="max-w-md text-white">
          <div className="mb-8 flex items-center">
            <Heart className="h-8 w-8 mr-2" />
            <h1 className="text-3xl font-bold">Heartbeat</h1>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Find your perfect match today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of singles who have found meaningful connections
            through our platform.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={avatar3}
              width={80}
              height={80}
              alt="User"
              className="rounded-full border-2 border-white"
            />
            <img
              src={avatar2}
              width={80}
              height={80}
              alt="User"
              className="rounded-full border-2 border-white"
            />
            <img
              src={avatar1}
              width={80}
              height={80}
              alt="User"
              className="rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>

      {/*Right side form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Logo and header */}
          <div className="text-center mb-8">
            <div className="text-center md:hidden mb-8">
              <div className="inline-flex items-center mb-2">
                <Heart className="h-6 w-6 text-pink-500 mr-2" />
                <h1 className="text-2xl font-bold">Heartbeat</h1>
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Welcome to BizzyBee
            </h2>
            <p className="text-muted-foreground">Enter your credentials</p>
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            {/* First Name */}
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-black"
              >
                First Name
              </label>
              <div className="relative group">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 pl-12 bg-white text-gray-400 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 ease-in-out"
                />
                <User className="absolute left-3 top-3 h-6 w-6 text-gray-400 transition-all duration-300 group-focus-within:text-rose-500 dark:group-focus-within:text-indigo-500" />
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-black"
              >
                Last Name
              </label>
              <div className="relative group">
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 pl-12 bg-white text-gray-400 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 ease-in-out"
                />
                <User className="absolute left-3 top-3 h-6 w-6 text-gray-400 transition-all duration-300 group-focus-within:text-rose-500 dark:group-focus-within:text-indigo-500" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <div className="relative group">
                <input
                  id="email"
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="you@example.com"
                  className="appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 pl-12 bg-white text-gray-400 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 ease-in-out"
                />
                <Mail className="absolute left-3 top-3 h-6 w-6 text-gray-400 transition-all duration-300 group-focus-within:text-rose-500 dark:group-focus-within:text-indigo-500" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 pl-12 bg-white text-gray-400 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 ease-in-out"
                />
                <Lock className="absolute left-3 top-3 h-6 w-6 text-gray-400 transition-all duration-300 group-focus-within:text-rose-500 dark:group-focus-within:text-indigo-500" />
              </div>
            </div>

            {/* Error message */}
            <p className="text-red-500 text-center">{error}</p>

            {/* Sign Up Button */}
            <button
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              onClick={handleSignUp}
            >
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            {/* Login Link */}
            <p className="text-center mt-4">
              <Link
                to={"/login"}
                className="font-bold text-blue-500 hover:text-indigo-500 transition-colors duration-300 ease-in-out"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
