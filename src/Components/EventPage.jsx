import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_URL}/events`);
        setEvents(response.data);
      } catch (err) {
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600">Loading events...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Upcoming Events
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">
            No events available
          </p>
        ) : (
          events.map((event) => (
            <div
              key={event._id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={event.conductedBy.imageUrl}
                alt={event.conductedBy.clubName}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold text-blue-500 mt-4">
                {event.eventName}
              </h2>
              <p className="text-gray-600 mt-2">{event.aboutEvent}</p>
              <p className="text-sm text-gray-500 mt-2">
                Conducted by: <strong>{event.conductedBy.clubName}</strong>
              </p>
              <p className="text-sm text-gray-500">
                Date: {new Date(event.date).toLocaleDateString()}
              </p>
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-700">
                  Participants:
                </h3>
                <ul className="text-sm text-gray-600">
                  {event.participants.length > 0 ? (
                    event.participants.map((user) => (
                      <li key={user._id} className="border-b py-1">
                        {user.firstName} {user.lastName} ({user.email})
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400">No participants yet</li>
                  )}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventPage;
