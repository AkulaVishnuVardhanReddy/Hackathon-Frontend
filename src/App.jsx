import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Body from "./Components/Body";
import Home from "./Components/Home";
import Clubs from "./Components/Clubs";
import MainLayout from "./Components/MainLayout";
import Discussions from "./Components/Discussions";
import Career from "./Components/Career";
import Faculty from "./Components/Faculty";
import Admin from "./Components/Admin";
import ExamSchedule from "./Components/ExamSchedule";

function App() {
  return (
    <Router>
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
          <Route index element={<Discussions />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="career" element={<Career />} />
          <Route path="examschedule" element={<ExamSchedule />} />
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
    </Router>
  );
}


export default App;
