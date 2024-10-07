import { Box, Button } from "@mui/material";
import { useProductDetails } from "../../lib/hooks/useProductDetails";
import { Product } from "../../lib/types/productTypes";

export const ButtonsBox = ({ product }: { product: Product }) => {
  const { handleAddToCartClick, navigate } = useProductDetails();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => handleAddToCartClick(product)}
          sx={{
            padding: "20px",
            width: "100%",
          }}
        >
          Add to Cart
        </Button>
        <Button variant="outlined" onClick={() => navigate("/")}>
          main page
        </Button>
      </Box>
    </>
  );
};