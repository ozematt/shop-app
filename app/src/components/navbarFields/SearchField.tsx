import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../mui/styles";
import { useSearchField } from "../../lib/hooks/navbar/useSearchField";

export const SearchField = () => {
  const {
    handleInputFocusOut,
    productsTitle,
    handleProductSelect,
    searchValue,
    setSearchValue,
  } = useSearchField();
  //DATA
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [searchValue, setSearchValue] = useState("");
  // const dispatch = useDispatch<AppDispatch>();

  //sorted products list
  // const products = useSelector(selectSortedProducts);

  ////LOGIC

  //clear input when focus out
  // const handleInputFocusOut = useCallback(() => {
  //   setSearchValue("");
  // }, []);

  // useEffect(() => {
  //   dispatch(resetSortingMethod()); // Akcja do resetu kategorii
  // }, [location, dispatch]);

  // products list titles
  // const productsTitle: string[] =
  //   products?.map((product) => product.title) || [];

  // const handleProductSelect = (
  //   event: SyntheticEvent<Element, Event>,
  //   newValue: string | null
  // ) => {
  //   if (!newValue) return;

  //   // Find the product that matches the selected title
  //   const selectedProduct = products.find(
  //     (product) => product.title === newValue
  //   );

  //   // If a product is found, navigate to its detail page
  //   if (selectedProduct) {
  //     navigate(`/product/${selectedProduct.id}`);
  //   }
  // };

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
