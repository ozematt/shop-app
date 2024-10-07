import {
  Box,
  Button,
  Divider,
  Paper,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Product } from "../lib/types/productTypes";
import { useProductItem } from "../lib/hooks/useProductItem";

export const ProductItem = ({ product }: { product: Product }) => {
  //
  ////DATA
  const { productStyle, handleAddToCartClick, navigate } = useProductItem();
  const isMobile = useMediaQuery("(max-width:700px)");

  ////UI
  return (
    <>
      <Paper
        sx={productStyle}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {/* IMAGE */}
        <Box
          sx={{
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
        <Box sx={{ width: "500px" }}>
          {" "}
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2" sx={{ margin: "5px 0 5px 0" }}>
            <b>Category:</b> <em> {product.category}</em>
          </Typography>
          {isMobile ? null : (
            <Typography variant="body1" sx={{ marginTop: "13px" }}>
              {product.description.slice(0, 55)}
              ...
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "absolute",
              bottom: "5px",
            }}
          >
            {" "}
            <Typography sx={{ fontSize: "17px", padding: "10px 8px 10px 0" }}>
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
        <Divider orientation="vertical" flexItem />
        {/* PRICE BOX */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "140px",
            position: "relative",
          }}
        >
          {" "}
          <Typography variant="body1">Price:</Typography>
          <Typography variant="h4">
            <b>{product.price}</b>
            <span style={{ fontSize: "19px" }}> $</span>
          </Typography>
          <Button
            variant="contained"
            onClick={(event) => handleAddToCartClick(event, product)}
            sx={{
              padding: "20px",
              position: "absolute",
              bottom: "5px",
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Paper>
    </>
  );
};
