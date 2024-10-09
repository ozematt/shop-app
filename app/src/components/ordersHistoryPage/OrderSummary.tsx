import { Box, Divider, Typography } from "@mui/material";
import { Orders } from "../../lib/types/ordersTypes";
import { useOrderSummary } from "../../lib/hooks/ordersHistoryPage/useOrderSummary";

export const OrderSummary = ({ order }: { order: Orders }) => {
  //
  ////DATA
  const { isSmallScreen } = useOrderSummary();

  ////UI
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: isSmallScreen ? "30px" : "100px",
          marginBottom: "70px",
        }}
      >
        <Box sx={{ marginLeft: "20px" }}>
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            sx={{ padding: "20px 0 0 20px" }}
          >
            Shipping address:
          </Typography>
          <Box
            sx={{
              padding: "20px",
              marginLeft: "20px",
              width: "100%",
              minWidth: isSmallScreen ? "170px" : "210px",
            }}
          >
            <Typography variant={isSmallScreen ? "body1" : "h6"}>
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
        <Box sx={{ width: "100%", minWidth: "200px" }}>
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            sx={{ padding: "20px 0 0 20px" }}
          >
            Total amount paid:
          </Typography>
          <Typography
            variant="h4"
            sx={{ padding: "20px 0 0 20px", marginLeft: "20px" }}
          >
            <b>{order.totalPrice} </b>$
          </Typography>
        </Box>
      </Box>
    </>
  );
};
