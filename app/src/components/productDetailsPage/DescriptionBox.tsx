import { Box, Typography } from "@mui/material";
import { type ProductProp } from "../../lib/types";

export const DescriptionBox = ({ product }: ProductProp) => {
  //
  ////UI
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
        <Typography variant="body1" sx={{ marginBottom: "7px" }}>
          Description:
        </Typography>
        <Typography variant="h6">{product.description}</Typography>
      </Box>
    </>
  );
};
