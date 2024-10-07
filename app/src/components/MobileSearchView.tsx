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

  useEffect(() => {
    if (isLargeScreen) {
      navigate("/"); // Przekierowanie do głównej strony
    }
  }, [isLargeScreen, navigate]);

  ////UI
  return (
    <>
      {isLargeScreen ? null : (
        <>
          <Box
            sx={{
              marginTop: "70px",
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
