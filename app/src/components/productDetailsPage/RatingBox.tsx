import { Box, Typography, Rating } from "@mui/material";
import { Product } from "../../lib/types/productTypes";

export const RatingBox = ({ product }: { product: Product }) => {
  ////UI
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
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
    </>
  );
};
