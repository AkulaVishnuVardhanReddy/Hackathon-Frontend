import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import LoginNavBar from "./LoginNavBar";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-grow">
        {/* LoginNavBar */}
        <LoginNavBar />

        {/* Dynamic Content */}
        <div className="p-6 bg-gray-100 h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
