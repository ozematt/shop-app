import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { selectSortedProducts } from "../../../redux/products/productsSelectors";
import { resetSortingMethod } from "../../../redux/products/productsSlice";

export const useSearchField = () => {
  ////DATA
  const [searchValue, setSearchValue] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  //sorted products list
  const products = useSelector(selectSortedProducts);

  ////LOGIC

  //clear input when focus is out
  const handleInputFocusOut = useCallback(() => {
    setSearchValue("");
  }, []);

  const productsTitle: string[] = useMemo(
    () => products?.map((product) => product.title) || [],
    [products]
  );

  useEffect(() => {
    dispatch(resetSortingMethod()); // Akcja do resetu kategorii
  }, [location, dispatch]);

  const handleProductSelect = useCallback(
    (event: SyntheticEvent<Element, Event>, newValue: string | null) => {
      if (!newValue) return;

      // Find the product that matches the selected title
      const selectedProduct = products.find(
        (product) => product.title === newValue
      );

      // If a product is found, navigate to its detail page
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
