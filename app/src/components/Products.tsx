// import { Box, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";
import fetchProducts, { Product } from "../api/queries/products";
// import { grey } from "@mui/material/colors";

export const Products = () => {
  //   const theme = useTheme();
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(products);

  return (
    <>
      <Container maxWidth="xl">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products?.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "grey",
                height: "300px",
                width: "700px",
                display: "flex",
                gap: "20px",
                margin: "80px 10px 0 0",
                padding: "20px",
              }}
            >
              <img
                src={product.image}
                style={{ height: "250px", width: "200px" }}
              />
              <div>
                {" "}
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.rating.rate}</p>
              </div>
              <div>
                {" "}
                <p>{product.price}</p>
                <button>add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
