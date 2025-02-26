import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Body from "./Components/Body";
import Home from "./Components/Home";
import DiscussionPage from "./Components/DiscussionPage";
import MainLayout from "./Components/MainLayout";
import Discussions from "./Components/Discussions";
import Career from "./Components/Career";
import Default from "./Components/Default";
import ClubsList from "./Components/Clubs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (Before Login) */}
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        {/* Protected Routes (After Login - Student Dashboard) */}
        <Route path="/student" element={<MainLayout />}>
          <Route index element={<Discussions />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="clubs" element={<ClubsList />} />
          <Route path="career" element={<Career />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
