import Container from "@mui/material/Container";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { Product } from "../features/products/fetchProducts";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/fetchProducts";

export const Products = () => {
  const theme = useTheme();

  const dispatch: AppDispatch = useAppDispatch();

  const {
    items: products,
    loading,
    error,
    category,
    sortingMethod,
    filteredItems,
  } = useSelector((state: RootState) => state.productsList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //product box style
  const productStyle = {
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[1],
    color: theme.palette.text.primary,
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
      backgroundColor: "rgba(255,255,255, 0.05)",
      boxShadow: 3,
    },
  };

  //filtered products by category or all products
  const productsToSort = filteredItems?.length ? filteredItems : products;

  //sorting products by sorting method
  const sortedProducts = [...productsToSort]?.sort((a: Product, b: Product) => {
    if (sortingMethod === "desc") {
      return b.price - a.price;
    }
    if (sortingMethod === "asc") {
      return a.price - b.price;
    }
    if (sortingMethod === "rate: highest first") {
      return b.rating.rate - a.rating.rate;
    }
    if (sortingMethod === "rate: lowest first") {
      return a.rating.rate - b.rating.rate;
    }
    if (sortingMethod === "popularity: highest first") {
      return b.rating.count - a.rating.count;
    }
    if (sortingMethod === "popularity: lowest first") {
      return a.rating.count - b.rating.count;
    }
    return 0;
  });
  //UI
  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }
  if (error !== null) {
    return <p>{error}</p>;
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
          {sortedProducts?.map((product) => (
            // MAIN BOX
            <Box key={product.id} sx={productStyle}>
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
                <p>{product.description.slice(0, 70)}...</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "30px",
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
                  sx={{
                    backgroundColor: "#DE7F1F",
                    padding: "20px",
                    marginTop: "145px",
                    width: "94%",
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};
