import { useNavigate } from "react-router-dom";

const StudentHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to Student Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Stay updated with the latest discussions, club activities, and career
          opportunities.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/student/discussions")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Discussions
          </button>
          <button
            onClick={() => navigate("/student/clubs")}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Clubs
          </button>
          <button
            onClick={() => navigate("/student/events")}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all"
          >
            Events
          </button>
          <button
            onClick={() => navigate("/student/examschedule")}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
          >
            Exam Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
