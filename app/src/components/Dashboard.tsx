import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { BottomNavbar } from "./BottomNavbar";

export const Dashboard = () => {
  //
  ////Ui
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <BottomNavbar />
      </div>
    </>
  );
};
