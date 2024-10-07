import { Box, useMediaQuery } from "@mui/material";
import { CategoryField } from "./navbarFields/CategoryField";
import { SearchField } from "./navbarFields/SearchField";
import { SortField } from "./navbarFields/SortField";
import { Products } from "./Products";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const MobileSearchView = () => {
  //
  ////DATA
  const isLargeScreen = useMediaQuery("(min-width:990px)");

  const navigate = useNavigate();

  ////LOGIC
  useEffect(() => {
    if (isLargeScreen) {
      navigate("/");
    }
  }, [isLargeScreen, navigate]);

  ////UI
  return (
    <>
      {isLargeScreen ? null : (
        <>
          <Box
            sx={{
              margin: "70px 8px -70px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchField />
            <CategoryField />
            <SortField />
          </Box>
          <Products />
        </>
      )}
    </>
  );
};
