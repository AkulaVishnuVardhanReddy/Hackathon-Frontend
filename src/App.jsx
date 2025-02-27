import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementPopup from "./Components/AnnouncementPopup";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Body from "./Components/Body";
import Home from "./Components/Home";
import Clubs from "./Components/Clubs";
//import DiscussionPage from "./Components/DiscussionPage";
import MainLayout from "./Components/MainLayout";
import Discussions from "./Components/Discussions";
import Career from "./Components/Career";
//import Default from "./Components/Default";
import Faculty from "./Components/Faculty";
import Admin from "./Components/Admin";
import ExamSchedule from "./Components/ExamSchedule";
import StudentHome from "./Components/StudentHome";
import EventPage from "./Components/EventPage";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <Router>
      <AnnouncementWrapper />
    </Router>
  );
};

const AnnouncementWrapper = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      if (
        location.pathname === "/student" ||
        location.pathname === "/faculty" ||
        location.pathname === "/admin"
      ) {
        try {
          const res = await axios.get(`${API_URL}/annoucements`);
          setAnnouncements(res.data);
          if (res.data.length > 0) {
            setShowPopup(true);
          }
        } catch (error) {
          console.error("Error fetching announcements:", error);
        }
      }
    };

    fetchAnnouncements();
  }, [location]);

  return (
    <>
      <Routes>
        {/* Public Routes (Before Login) */}
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="examschedule" element={<ExamSchedule />} />
        </Route>

        {/* Protected Routes (After Login - Student Dashboard) */}
        <Route path="/student" element={<MainLayout />}>
          <Route index element={<StudentHome />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="career" element={<Career />} />
          <Route path="examschedule" element={<ExamSchedule />} />
          <Route path="events" element={<EventPage />} />
        </Route>

        <Route path="/faculty" element={<MainLayout />}>
          <Route index element={<Faculty />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="career" element={<Career />} />
          <Route path="examschedule" element={<ExamSchedule />} />
        </Route>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Admin />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="career" element={<Career />} />
          <Route path="examschedule" element={<ExamSchedule />} />
        </Route>
      </Routes>

      {/* Show announcements popup when available */}
      {showPopup && (
        <AnnouncementPopup
          announcements={announcements}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default App;
