import { Box, Divider, Paper, Typography, useMediaQuery } from "@mui/material";

import { OrderSummary } from "./OrderSummary";
import { Orders } from "../../lib/types/userTypes";
import React from "react";

export const OrderItem = React.memo(({ order }: { order: Orders }) => {
  //
  ////DATA
  const isSmallScreen = useMediaQuery("(max-width:790px)");

  ////UI
  return (
    <>
      <Paper
        sx={{
          marginTop: "10px",
          padding: "20px",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h6" : "h5"}
          sx={{ padding: "20px" }}
        >
          Purchase date: <i>{order.date}</i>
        </Typography>
        <Divider />
        {order.items.map((item) => (
          <Box key={item.id} sx={{ padding: "20px", display: "flex" }}>
            {/* IMAGE */}
            <Box
              sx={{
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

            {/* TITLE SECTION */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                marginLeft: "30px",
              }}
            >
              {" "}
              <Typography
                variant={isSmallScreen ? "h6" : "h5"}
                sx={{ width: "100%", maxWidth: "500px" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1">Pieces: x{item.pieces}</Typography>
              <Typography variant="h5">
                Price: <b>{item.price}</b> $
              </Typography>
              <Divider />
            </Box>
          </Box>
        ))}
        <OrderSummary order={order} />
      </Paper>
    </>
  );
});
