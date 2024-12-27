import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import { User, Heart, X } from "lucide-react";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

  return (
    <div className="w-full max-w-sm h-[36rem] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
      <div className="relative h-full">
        <img
          className="w-full h-full object-cover"
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="absolute bottom-20 left-0 right-0 p-6 space-y-2">
            <h2 className="text-3xl font-bold text-white">
              {firstName}, {age}
            </h2>

            {about && (
              <p className="text-white text-sm line-clamp-2 opacity-80">
                {about}
              </p>
            )}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
          <p className="text-white text-sm font-semibold flex items-center">
            <User size={16} className="mr-2" />
            {gender}
          </p>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          <button
            className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out"
            onClick={() => handleSendRequest("ignored", _id)}
            aria-label="Ignore profile"
          >
            <X size={24} className="text-white" />
          </button>
          <button
            className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
            onClick={() => handleSendRequest("interested", _id)}
            aria-label="Show interest in profile"
          >
            <Heart size={24} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
