import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { fetchProducts, Product } from "../../features/products/fetchProducts";
import { Autocomplete } from "@mui/material";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";

// MUI STYLES
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const SearchField = () => {
  //DATA
  const [searchValue, setSearchValue] = useState("");

  const dispatch: AppDispatch = useAppDispatch();

  const {
    items: products,
    loading,
    error,
  } = useSelector((state: RootState) => state.productsList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputFocusOut = () => {
    setSearchValue("");
  };

  const productsTitle: string[] =
    products?.map((product) => product.title) || [];
  //UI
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {/* Autocomplete wrapper*/}
        <Autocomplete
          freeSolo
          options={productsTitle}
          inputValue={searchValue}
          onInputChange={(_, newInputValue) => {
            setSearchValue(newInputValue);
          }}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <StyledInputBase
              {...params.InputProps}
              placeholder="Search…"
              inputProps={{ ...params.inputProps, "aria-label": "search" }}
              value={searchValue}
              onBlur={handleInputFocusOut}
              sx={{
                // break points
                width: {
                  xs: "100%",
                  sm: "25ch",
                  "&:focus-within": {
                    width: "40ch",
                  },
                },
              }}
            />
          )}
        />
      </Search>
    </>
  );
};
