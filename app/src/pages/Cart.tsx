import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import emptyCart from "../assets/Empty_cart_image.png";
import { useSelector } from "react-redux";
import { selectAllCart } from "../features/cart/cartSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const emptyCartView = (
  <>
    <Paper sx={{ margin: "80px 30px 0 0" }}>
      <Typography variant="h6" sx={{ marginLeft: "15px", padding: "5px" }}>
        Your cart is empty
      </Typography>
    </Paper>

    <img
      src={emptyCart}
      style={{
        margin: "120px 0 0 80px",
        width: "900px",
        height: "700px",
      }}
    />
  </>
);

export const Cart = () => {
  //when cart is empty

  const cart = useSelector(selectAllCart);
  console.log(cart.length);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100vh" }}>
          {cart.length > 0 ? (
            <div>
              <div
                style={{
                  margin: "90px 30px 0 0",
                  display: "flex",
                  gap: "7px",
                }}
              >
                <Box
                  sx={{
                    width: "300px",
                    height: "5px",
                    backgroundColor: "#DE7F1F",
                  }}
                />
                <Box
                  sx={{
                    width: "300px",
                    height: "5px",
                    backgroundColor: "#DE7F1F",
                  }}
                />
                <Box
                  sx={{
                    width: "300px",
                    height: "5px",
                    backgroundColor: "#DE7F1F",
                  }}
                />
              </div>
              <Paper sx={{ marginTop: "20px" }}>
                <Typography
                  variant="h6"
                  sx={{ marginLeft: "15px", padding: "5px" }}
                >
                  Your Cart:
                </Typography>
              </Paper>
              <div style={{ display: "flex", gap: "7px" }}>
                {/* item field */}
                <Paper
                  sx={{
                    flexGrow: "2",
                    height: "300px",
                    width: "100%",
                    maxWidth: "900px",
                    margin: "14px 7px 0 0",
                  }}
                >
                  {/* Item section */}
                  <Box sx={{ margin: "30px 10px 0 50px", display: "flex" }}>
                    {/* box with image and amount add */}
                    <div>
                      <div
                        style={{
                          backgroundImage: `url()`,
                          backgroundSize: "contain",
                          backgroundColor: "white",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          width: "150px",
                          height: "200px",
                          margin: "0 0 10px 12px",
                        }}
                      />
                      <Box sx={{ display: "flex", fontSize: "18px" }}>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            border: " 1px solid grey",
                            textAlign: "center",
                            lineHeight: "40px",
                          }}
                        >
                          -
                        </div>
                        <div
                          style={{
                            width: "90px",
                            height: "40px",
                            border: " 1px solid grey",
                            textAlign: "center",
                            lineHeight: "40px",
                          }}
                        >
                          1
                        </div>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            border: " 1px solid grey",
                            textAlign: "center",
                            lineHeight: "40px",
                          }}
                        >
                          +
                        </div>
                      </Box>
                    </div>

                    {/* section with title and delete */}
                    <div
                      style={{
                        width: "100%",
                        padding: "30px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {" "}
                        <Typography variant="h5">Title</Typography>
                        <DeleteOutlineOutlinedIcon fontSize="large" />
                      </div>
                      <Typography
                        variant="h6"
                        sx={{
                          position: "absolute",
                          bottom: "40px",
                          right: "40px",
                        }}
                      >
                        Price: 100,00
                      </Typography>
                    </div>
                  </Box>
                </Paper>
                {/* price field */}
                <Paper
                  sx={{
                    flexGrow: "1",
                    minWidth: "100px",
                    marginTop: "14px",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ position: "absolute", top: "130px", right: "140px" }}
                  >
                    Total Price: 100,00
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#DE7F1F",
                      padding: "20px",
                      position: "absolute",
                      bottom: "30px",
                      left: "25%",
                      width: "300px",
                    }}
                  >
                    Buy
                  </Button>
                </Paper>
              </div>
            </div>
          ) : (
            emptyCartView
          )}
        </Box>
      </Container>
    </>
  );
};
