import { Box, Paper, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { type CartProduct } from "../../lib/types";
import { useCartItem } from "../../lib/hooks/useCartItem";
import React from "react";

export const CartItem = React.memo(({ item }: { item: CartProduct }) => {
  //
  ////DATA
  const {
    handleIncrementItemQuantity,
    handleDecrementItemQuantity,
    handleRemoveFromCart,
  } = useCartItem();

  ////UI
  return (
    <Paper
      sx={{
        height: "300px",
        width: "100%",
        maxWidth: "1200px",
        marginBottom: "10px",
        display: "flex",
        padding: "20px",
      }}
    >
      {/* IMAGE AND QUANTITY + / - */}
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${item.image})`,
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
            onClick={() => handleDecrementItemQuantity(item)}
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              border: " 1px solid grey",
              textAlign: "center",
              lineHeight: "35px",
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
              lineHeight: "37px",
            }}
          >
            {item.pieces}
          </div>
          <div
            onClick={() => handleIncrementItemQuantity(item)}
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              border: " 1px solid grey",
              textAlign: "center",
              lineHeight: "35px",
            }}
          >
            +
          </div>
        </Box>
      </Box>

      {/* TITLE */}
      <Box
        sx={{
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        {/* TITLE, DELETE ICON */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {" "}
          <Typography variant="h6" sx={{ maxWidth: "500px" }}>
            <b>{item.title}</b>
          </Typography>
          <DeleteOutlineOutlinedIcon
            onClick={() => handleRemoveFromCart(item.id)}
            sx={{
              cursor: "pointer",
              color: "red",
              fontSize: "50px",
              borderRadius: "50%",
              padding: "8px",
              display: "inline-block",
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.05)",
              },
            }}
            fontSize="large"
          />
        </Box>

        <Typography variant="h5">
          Price: <b>{item.price}</b> $
        </Typography>
      </Box>
    </Paper>
  );
});
