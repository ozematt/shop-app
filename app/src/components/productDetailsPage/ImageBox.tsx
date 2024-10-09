import { Box } from "@mui/material";
import { Product } from "../../lib/types/productTypes";

export const ImageBox = ({ product }: { product: Product }) => {
  //
  ////UI
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: "contain",
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          maxWidth: "800px",
          height: "720px",
          maxHeight: "950px",
        }}
      />
    </>
  );
};
