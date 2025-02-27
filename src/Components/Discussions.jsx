import { useEffect, useState } from "react";
import DiscussionChat from "./DiscussionChat";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Discussions = () => {
  const [user, setUser] = useState(null);
  const [roomId, setRoomId] = useState("general"); // Default room

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_URL}/me`, { withCredentials: true });
        if (!res.data || !res.data.user) {
          alert("Please login");
          return;
        }
        setUser(res.data.user.email);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Welcome to <span className="text-blue-500">{roomId}</span> Discussion
      </h2>

      {/* Room Selection Dropdown */}
      <div className="flex justify-center mb-4">
        <select
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          className="p-2 border rounded-lg bg-gray-100 text-blue-500 focus:ring-2 focus:ring-blue-500"
        >
          <option value="general">General</option>
          <option value="tech">Tech Talk</option>
          <option value="sports">Sports Club</option>
        </select>
      </div>

      {/* Chat Component */}
      {user ? (
        <DiscussionChat roomId={roomId} user={user} />
      ) : (
        <p className="text-gray-500 text-center">Loading...</p>
      )}
    </div>
  );
};

export default Discussions;