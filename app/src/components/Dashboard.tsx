import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { BottomNavBar } from "./BottomNavBar";

export const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <BottomNavBar />
      </div>
    </>
  );
};
