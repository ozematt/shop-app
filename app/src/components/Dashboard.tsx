import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
  //
  ////Ui
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
