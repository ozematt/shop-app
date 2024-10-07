import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import SimpleBottomNavigation from "./BottomNav";

export const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <SimpleBottomNavigation />
      </div>
    </>
  );
};
