import React from "react";

import { Navbar } from "../components/Navbar";

import { Products } from "../components/Products";
// import { CssBaseline } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
};
