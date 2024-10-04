import Container from "@mui/material/Container";
import { Box, LinearProgress, Typography } from "@mui/material";
import { ProductItem } from "./ProductItem";
import { useProducts } from "../lib/hooks/useProducts";

export const Products = () => {
  //
  ////DATA
  const { visibleCount, sortedProducts, isPending, isError, error, ref } =
    useProducts();

  ////UI
  if (isPending) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Error: {error?.message}
      </Typography>
    );
  }

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          // justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "90px",
        }}
      >
        {/* PRODUCTS */}
        {sortedProducts?.slice(0, visibleCount).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {/* ELEMENT SENTINEL */}
        <div ref={ref} style={{ height: "20px" }} />
      </Container>
    </>
  );
};
