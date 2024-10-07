import { Box, Typography } from "@mui/material";
import { Product } from "../../lib/types/productTypes";

export const TitleBox = ({ product }: { product: Product }) => {
  return (
    <>
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

          <Typography
            variant="body1"
            style={{ fontSize: "16px", marginTop: "5px" }}
          >
            <b>Category:</b> <em> {product.category}</em>
          </Typography>
        </Box>
      </Box>
    </>
  );
};
