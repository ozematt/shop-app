import React from "react";
import Box from "@mui/material/Box";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Navbar />
      </Box>
    </>
  );
};
