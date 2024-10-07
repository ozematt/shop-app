import { Box, Typography } from "@mui/material";
import { Product } from "../../lib/types/productTypes";

export const DescriptionBox = ({ product }: { product: Product }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "50px",
          marginBottom: "90px",
        }}
      >
        {" "}
        <Typography variant="h6">{product.description}</Typography>
      </Box>
    </>
  );
};
