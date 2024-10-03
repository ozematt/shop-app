import Container from "@mui/material/Container";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Paper,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import fetchProducts from "../api/queries/products";
import { selectSortedProducts } from "../redux/products/productsSelectors";
import { addToCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { Product } from "../lib/types/productTypes";
import { useIntersection } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { addProducts } from "../redux/products/productsSlice";

export const Products = () => {
  ////DATA

  const theme = useTheme();

  //product box style
  const productStyle = {
    padding: "10px",
    height: "300px",
    width: "720px",
    display: "flex",
    gap: "10px",
    margin: "50px 20px 0 0",
    border: "none",
    borderRight: "0.5px solid #424242",
    borderBottom: "0.5px solid #424242",
    borderRadius: "8px",
    position: "relative",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark" ? "rgba(255,255,255, 0.05)" : "none",
      boxShadow: 10,
    },
  };

  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  //memoized sorting selector
  const sortedProducts = useSelector(selectSortedProducts);

  //fetch products status
  // const { loading, error } = useSelector((state: RootState) => state.products);

  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  ////LOGIC

  // fetch products after render
  useEffect(() => {
    if (data) {
      dispatch(addProducts(data));
    }
  }, [dispatch, data]);

  // add to cart when user is logged in
  const handleAddToCartClick = (event: React.MouseEvent, item: Product) => {
    event.stopPropagation();
    auth ? dispatch(addToCart(item)) : navigate("/login");
  };

  //dynamic product loading
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Increase the number of visible products by 4
  };

  // A function that listens for page scrolling
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

  //UI
  if (isPending) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "80px",
          }}
        >
          {/* PRODUCTS PRINT */}
          {sortedProducts?.slice(0, visibleCount).map((product) => (
            // MAIN BOX
            <Paper
              key={product.id}
              sx={productStyle}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* IMAGE */}
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "contain",
                  backgroundColor: "white",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "400px",
                  height: "100%",
                }}
              />

              {/* TITLE BOX */}
              <div style={{ width: "500px" }}>
                {" "}
                <Typography variant="h6">{product.title}</Typography>
                <p style={{ fontSize: "14px", margin: "5px 0 5px 0" }}>
                  <b>Category:</b> <em> {product.category}</em>
                </p>
                <p>{product.description.slice(0, 55)}...</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "1px",
                  }}
                >
                  {" "}
                  <Typography
                    sx={{ fontSize: "17px", padding: "10px 8px 10px 0" }}
                  >
                    {product.rating.rate}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={Math.floor(product.rating.rate)}
                    readOnly
                    sx={{ marginRight: "5px" }}
                  />
                  <p>({product.rating.count})</p>
                </div>
              </div>
              <Divider orientation="vertical" flexItem />
              {/* PRICE BOX */}
              <Box
                sx={{
                  width: "300px",
                  position: "relative",
                }}
              >
                {" "}
                <div style={{ flexGrow: "1" }}>
                  {" "}
                  <span>Price:</span>
                  <Typography variant="h4">
                    <b>{product.price}</b>

                    <span style={{ fontSize: "19px" }}> $</span>
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  onClick={(event) => handleAddToCartClick(event, product)}
                  sx={{
                    padding: "20px",
                    position: "absolute",
                    bottom: "20px",
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Paper>
          ))}
          {/* Element sentinel */}
          <div ref={ref} style={{ height: "20px" }} />
        </Box>
      </Container>
    </>
  );
};
