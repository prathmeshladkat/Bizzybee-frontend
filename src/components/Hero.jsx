import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";

import bizzybee2 from "../assets/bizzybee2.png";
const Hero = () => {
  const companyName = "BizzyBee";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bizzybee2})`,
          filter: "brightness(0.6)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full w-full">
        {/* Header */}
        <header className="flex justify-between bg-gradient-to-b from-black to-transparent items-center p-6">
          <div className="text-white text-2xl ml-3 -mt-4 font-bold">
            <img
              src={logo2}
              className="h-10 w-10 inline-block mr-2"
              alt="logo"
            />
            {companyName}
          </div>
          <Link to={"/login"}>
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105">
              Log in
            </button>
          </Link>
        </header>

        {/* Main Hero Content */}
        <div className="flex flex-col items-center justify-center h-[80%] text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-8">
            Start something epic.
          </h1>
          <Link to={"/signup"}>
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all transform hover:scale-105">
              Create account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
