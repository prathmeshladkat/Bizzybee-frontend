import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

const Landing = () => {
  return (
    <main className="flex-grow flex flex-col lg:flex-row items-center justify-center text-center p-6 lg:px-12">
      <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-orange-400 text-sm uppercase mb-2">
          A Social Media for Developers
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-left">
          Match with <span className="text-blue-400">Developers</span> who
          inspire
        </h2>
        <p className="text-green-500 text-sm mb-8">
          Swipe into the world of developers.
        </p>
        <div className="flex flex-col items-center lg:items-start gap-8">
          <Link
            to={"/signup"}
            className="w-full bg-gradient-to-r from-rose-500 to-indigo-500 hover:from-rose-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
          >
            Join for free
          </Link>
          <p className="text-sm text-gray-400">
            Already joined us?
            <Link to={"/login"} className="text-blue-400 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={hero}
          alt="Developers Image"
          className="w-full lg:w-4/5 rounded-lg"
        />
      </div>
    </main>
  );
};

export default Landing;
