import { Box, Typography, useMediaQuery } from "@mui/material";
import { Product } from "../../lib/types/productTypes";

export const PriceBox = ({ product }: { product: Product }) => {
  const isSmallScreen = useMediaQuery("(max-width:1100px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          margin: "50px 50px 0px 0px",
        }}
      >
        <Typography
          variant={isSmallScreen ? "body1" : "h5"}
          sx={{ margin: "0 20px 7px 0" }}
        >
          Price:{" "}
        </Typography>
        <Typography variant={isSmallScreen ? "h3" : "h2"}>
          <b>{product.price}</b>

          <span style={{ fontSize: "25px" }}> $</span>
        </Typography>
      </Box>
    </>
  );
};