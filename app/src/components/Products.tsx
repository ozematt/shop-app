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

export const Products = () => {
  //theme
  const theme = useTheme();

  //fetch products
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  //product item style
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
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.05)",
      boxShadow: 3,
    },
  };

  //UI
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
                    marginTop: "155px",
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
