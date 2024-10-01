import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Orders } from "../redux/user/ordersSlice";
// import { Container } from "postcss";

export const OrdersHistory = () => {
  const orders: Orders[] = useSelector((state: RootState) => state.orders);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper
          sx={{
            margin: "90px 7px 0 0",
          }}
        >
          <Typography variant="h5" sx={{ padding: "20px" }}>
            Yours orders history:
          </Typography>
        </Paper>
        {orders.length > 0 ? (
          orders.map((order) => (
            <Paper
              key={order.id}
              sx={{
                margin: "14px 7px 0 0",
                paddingBottom: "20px",
              }}
            >
              <Typography variant="h5" sx={{ padding: "20px" }}>
                Purchase date: <i>{order.date}</i>
              </Typography>
              <Divider />
              {order.items.map((item) => (
                <Box key={item.id} sx={{ padding: "20px", display: "flex" }}>
                  {/* Item section */}
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "contain",
                      backgroundColor: "white",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "120px",
                      height: "180px",
                      margin: "0 0 10px 12px",
                    }}
                  />

                  {/* section with title */}
                  <div
                    style={{
                      width: "100%",
                      padding: "10px 0 0 20px",
                    }}
                  >
                    {" "}
                    <Typography variant="h5" sx={{ width: "500px" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ width: "500px", marginTop: "30px" }}
                    >
                      Pieces: x{item.pieces}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginTop: "17px",
                      }}
                    >
                      Price: <b>{item.price}</b> $
                    </Typography>
                  </div>
                </Box>
              ))}
              <Divider />
              <Box sx={{ display: "flex", gap: "100px" }}>
                <Box>
                  <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
                    Address:
                  </Typography>
                  <Box sx={{ padding: "20px", marginLeft: "20px" }}>
                    <Typography variant="h6">
                      {order.address.name} {order.address.surname}
                    </Typography>
                    <Typography variant="h6">
                      {order.address.street} {order.address.houseNumber}
                      {order.address.apartmentNumber &&
                        "/" + order.address.apartmentNumber}
                    </Typography>
                    <Typography variant="h6">
                      {" "}
                      {order.address.zipCode} {order.address.city}
                    </Typography>
                  </Box>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box>
                  <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
                    Total amount paid:
                  </Typography>
                  <Typography variant="h4" sx={{ padding: "20px 0 0 20px" }}>
                    {order.totalPrice} $
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))
        ) : (
          <Paper
            sx={{
              margin: "14px 7px 0 0",
              paddingBottom: "20px",
            }}
          >
            <Typography variant="h3" sx={{ padding: "20px" }}>
              You don't have any previous orders
            </Typography>
          </Paper>
        )}
      </Container>
    </>
  );
};
