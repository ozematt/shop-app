import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useProductDetails } from "../lib/hooks/useProductDetails";
import { TitleBox } from "../components/productDetails/TitleBox";
import { PriceBox } from "../components/productDetails/PriceBox";
import { RatingBox } from "../components/productDetails/RatingBox";
import { DescriptionBox } from "../components/productDetails/DescriptionBox";
import { ButtonsBox } from "../components/productDetails/ButtonsBox";
import { ImageBox } from "../components/productDetails/ImageBox";

export const ProductDetails = () => {
  //
  ////DATA
  const { product } = useProductDetails();
  const isSmallScreen = useMediaQuery("(max-width:1100px)");
  const isSmallerScreen = useMediaQuery("(max-width:875px)");

  ////UI
  if (!product) {
    return (
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Product not found!
      </Typography>
    );
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        {!isSmallerScreen ? (
          <Paper
            sx={{
              marginTop: "80px",
              padding: "40px 0 40px 40px",
            }}
          >
            <TitleBox product={product} />

            {/* PRODUCT BOX */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <ImageBox product={product} />
              <Box
                sx={{
                  padding: isSmallScreen ? "20px" : "50px",
                }}
              >
                <Box sx={{ marginBottom: "20px" }}>
                  <PriceBox product={product} />
                  <RatingBox product={product} />
                </Box>
                <Divider flexItem />
                <DescriptionBox product={product} />
                <ButtonsBox product={product} />
              </Box>
            </Box>
          </Paper>
        ) : (
          <Paper
            sx={{
              margin: "80px 0 70px 0",
              // padding: "40px",
              // height: "950px",
            }}
          >
            <ImageBox product={product} />
            <Box sx={{ padding: "15px" }}>
              <TitleBox product={product} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {" "}
                <Box sx={{ marginBottom: "20px" }}>
                  <PriceBox product={product} />
                  <RatingBox product={product} />
                </Box>
                <ButtonsBox product={product} />
              </Box>

              <DescriptionBox product={product} />
            </Box>
          </Paper>
        )}
      </Container>
    </>
  );
};
