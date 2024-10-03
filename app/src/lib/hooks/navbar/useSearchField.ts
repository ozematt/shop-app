import { SyntheticEvent, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectSortedProducts } from "../../../redux/products/productsSelectors";

export const useSearchField = () => {
  //
  ////DATA
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  //sorted products list
  const products = useSelector(selectSortedProducts);

  //
  ////LOGIC
  //clear input with searching value, when focus is out
  const handleInputFocusOut = useCallback(() => {
    setSearchValue("");
  }, []);

  // products titles list
  const productsTitle: string[] = useMemo(
    () => products?.map((product) => product.title) || [],
    [products]
  );

  //product selection action
  const handleProductSelect = useCallback(
    (event: SyntheticEvent<Element, Event>, newValue: string | null) => {
      if (!newValue) return;

      // find the product that matches the selected title
      const selectedProduct = products.find(
        (product) => product.title === newValue
      );

      // if a product is found, navigate to its detail page
      if (selectedProduct) {
        navigate(`/product/${selectedProduct.id}`);
      }
    },
    [products, navigate]
  );

  return {
    location,
    handleInputFocusOut,
    productsTitle,
    handleProductSelect,
    searchValue,
    setSearchValue,
  };
};
