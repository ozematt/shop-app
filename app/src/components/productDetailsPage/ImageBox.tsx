import { Box } from "@mui/material";
import { type ProductProp } from "../../lib/types";

export const ImageBox = ({ product }: ProductProp) => {
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
