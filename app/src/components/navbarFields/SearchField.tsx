import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@mui/material";

import { SyntheticEvent, useCallback, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectSortedProducts } from "../../redux/products/productsSelectors";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  //products list from global state
  const products = useSelector(selectSortedProducts);

  //clear input when focus out
  const handleInputFocusOut = useCallback(() => {
    setSearchValue("");
  }, []);

  // products list titles
  const productsTitle: string[] =
    products?.map((product) => product.title) || [];

  const handleProductSelect = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    if (!newValue) return;

    // Find the product that matches the selected title
    const selectedProduct = products.find(
      (product) => product.title === newValue
    );

    // If a product is found, navigate to its detail page
    if (selectedProduct) {
      navigate(`/product/${selectedProduct.id}`);
    }
  };

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
          // onClick={}
          options={productsTitle}
          inputValue={searchValue}
          onChange={handleProductSelect}
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
