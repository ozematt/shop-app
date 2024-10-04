import { Box, Divider, Typography } from "@mui/material";
import { Orders } from "../redux/user/userSlice";

export const OrderSummary = ({ order }: { order: Orders }) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "100px" }}>
        <Box sx={{ marginLeft: "20px" }}>
          <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
            Shipping address:
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
