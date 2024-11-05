import { Box, Typography, Rating } from "@mui/material";
import { type ProductProp } from "../../lib/types";

export const RatingBox = ({ product }: ProductProp) => {
  //
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
