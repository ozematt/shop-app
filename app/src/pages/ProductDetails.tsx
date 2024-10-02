import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { Product } from "../lib/types/productTypes";
import { addToCart } from "../redux/cart/cartSlice";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useAppDispatch();
  const auth = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const product = useSelector((state: RootState) =>
    state.products.items.find((item) => item.id === Number(id))
  );
  console.log(product);

  const handleAddToCartClick = (item: Product) => {
    auth ? dispatch(addToCart(item)) : navigate("/login");
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper
          sx={{
            margin: "14px 7px 0 0",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Box>
              <Typography variant="h4">{product.title}</Typography>

              <p style={{ fontSize: "16px", margin: "5px 0 5px 0" }}>
                <b>Category:</b> <em> {product.category}</em>
              </p>
            </Box>
          </Box>

          <Box sx={{ display: "flex", position: "relative" }}>
            {/* IMG */}
            <div
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: "contain",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "800px",
                height: "800px",
              }}
            />
            {/* Box with price and rating */}
            <Box sx={{ marginLeft: "50px" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    margin: "50px 50px 0px 0px",
                  }}
                >
                  <Typography variant="h5" sx={{ margin: "0 20px 7px 0" }}>
                    Price:{" "}
                  </Typography>
                  <Typography variant="h2">
                    <b>{product.price}</b>

                    <span style={{ fontSize: "25px" }}> $</span>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    // marginLeft: "50px",
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
                </Box>
              </Box>
              <Divider flexItem />
              <Box sx={{ width: "500px", marginTop: "50px" }}>
                {" "}
                <Typography variant="h6">{product.description}</Typography>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  bottom: "50px",
                  gap: "10px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleAddToCartClick(product)}
                  sx={{
                    // backgroundColor: "#DE7F1F",
                    padding: "20px",
                    width: "420px",
                  }}
                >
                  Add to Cart
                </Button>
                <Button variant="outlined" onClick={() => navigate("/")}>
                  main page
                </Button>
              </Box>
            </Box>
          </Box>

          {/* PRICE BOX */}
          <Box
            sx={{
              width: "300px",
            }}
          ></Box>
        </Paper>
      </Container>
    </>
  );
};
