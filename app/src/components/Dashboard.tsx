import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
// import { BottomNavbar } from "./BottomNavbar";
// import { useBottomNavbar } from "../lib/hooks/useBottomNavbar";

export const Dashboard = () => {
  //
  ////Ui
  return (
    <>
      <div>
        <Navbar />
        {/* {isSmallScreen && <BottomNavbar />} */}
        <Outlet />
      </div>
    </>
  );
};
