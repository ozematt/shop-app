// import { Box, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";
import fetchProducts, { Product } from "../api/queries/products";
import {
  Box,
  Button,
  Divider,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
// import { grey } from "@mui/material/colors";

export const Products = () => {
  const theme = useTheme();

  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(products);

  const productStyle = {
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[1],
    color: theme.palette.text.primary,
    height: "300px",
    width: "720px",
    display: "flex",
    gap: "20px",
    margin: "50px 20px 0 0",
    padding: "20px",
    border: "none",

    borderRight: "0.5px solid #424242",
    borderBottom: "0.5px solid #424242",
  };

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
          {products?.map((product) => (
            // MAIN BOX
            <Box key={product.id} sx={productStyle}>
              {/* IMAGE */}
              <img
                src={product.image}
                style={{ height: "100%", width: "200px" }}
              />
              {/* TITLE BOX */}
              <div style={{}}>
                {" "}
                <Typography variant="h6">{product.title}</Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
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
              <Box sx={{}}>
                {" "}
                <div>
                  {" "}
                  <span>Price:</span>
                  <Typography variant="h4"> {product.price} $</Typography>
                </div>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#DE7F1F", marginRight: "15px" }}
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
