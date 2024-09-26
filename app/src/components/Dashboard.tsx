import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
