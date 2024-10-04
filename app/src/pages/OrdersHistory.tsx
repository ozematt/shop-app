import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { OrderItem } from "../components/OrderItem";
import { OrdersEmpty } from "../components/OrdersEmpty";
import { Orders } from "../lib/types/userTypes";

export const OrdersHistory = () => {
  //
  ////DATA
  const orders: Orders[] = useSelector((state: RootState) => state.user.orders);

  ////UI
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper
          sx={{
            marginTop: "90px",
          }}
        >
          <Typography variant="h5" sx={{ padding: "20px" }}>
            Yours orders history:
          </Typography>
        </Paper>

        {orders.length > 0 ? (
          orders.map((order) => <OrderItem key={order.id} order={order} />)
        ) : (
          <OrdersEmpty />
        )}
      </Container>
    </>
  );
};
