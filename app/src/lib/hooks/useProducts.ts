import { useCallback, useEffect, useState } from "react";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectSortedProducts } from "../../redux/products/productsSelectors";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../../api/queries/products";
import { addProducts } from "../../redux/products/productsSlice";
import { useIntersection } from "@mantine/hooks";

export const useProducts = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  // number of dynamic product loaded
  const [visibleCount, setVisibleCount] = useState<number>(10);

  // memoized sorting selector
  const sortedProducts = useSelector(selectSortedProducts);

  //products in state
  const itemsFetched = useSelector((state: RootState) => state.products.items);

  // fetch products
  const {
    isPending,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  ////LOGIC
  // save products in state after render if there are not saved items
  useEffect(() => {
    if (itemsFetched.length > 0) {
      return;
    }
    if (products) {
      dispatch(addProducts(products));
    }
  }, [dispatch, products, itemsFetched]);

  // increase the number of visible products by 4
  const loadMoreProducts = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 4);
  }, []);

  // a function that listens for page scrolling
  const { ref, entry } = useIntersection({
    root: null, // watch in the context of the entire viewport
    rootMargin: "0px",
    threshold: 1.0, // activate when sentinel is fully visible
  });

  // event listener for scroll
  useEffect(() => {
    if (entry?.isIntersecting) {
      loadMoreProducts(); // load more products when sentinel is visible
    }
  }, [entry]);

  return { visibleCount, sortedProducts, isPending, isError, error, ref };
};
