import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../mui/styles";
import { useSearchField } from "../../lib/hooks/navbar/useSearchField";

export const SearchField = () => {
  //
  ////DATA
  const {
    handleInputFocusOut,
    productsTitle,
    handleProductSelect,
    searchValue,
    setSearchValue,
  } = useSearchField();

  //
  ////UI
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Autocomplete
          freeSolo
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
