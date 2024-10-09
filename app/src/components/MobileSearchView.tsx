import { Box } from "@mui/material";
import { CategoryField } from "./navbarFields/CategoryField";
import { SearchField } from "./navbarFields/SearchField";
import { SortField } from "./navbarFields/SortField";
import { Products } from "./Products";
import { useMobileSearchView } from "../lib/hooks/useMobileSearchView";

export const MobileSearchView = () => {
  //
  ////DATA
  const { isLargeScreen } = useMobileSearchView();

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
