import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import { OrderItem } from "../components/ordersHistoryPage/OrderItem";
import { OrdersEmpty } from "../components/ordersHistoryPage/OrdersEmpty";
import { useOrdersHistory } from "../lib/hooks/pages/useOrdersHistory";

export const OrdersHistory = () => {
  //
  ////DATA
  const { orders } = useOrdersHistory();

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
