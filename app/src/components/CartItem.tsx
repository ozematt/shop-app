import { Box, Paper, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { AppDispatch, useAppDispatch } from "../redux/store";
import { removeFromCart } from "../redux/cart/cartSlice";
import { CartProduct } from "../types/cartTypes";

interface CartItem {
  item: CartProduct;
  handleDecrementItemAmount: (item: CartProduct) => void;
  handleIncrementItemAmount: (item: CartProduct) => void;
}

export const CartItem = ({
  item,
  handleDecrementItemAmount,
  handleIncrementItemAmount,
}: CartItem) => {
  const dispatch: AppDispatch = useAppDispatch();

  ////UI
  return (
    <>
      <Paper
        key={item.id}
        sx={{
          height: "300px",
          width: "100%",
          maxWidth: "914px",
        }}
      >
        {/* Item section */}
        <Box sx={{ padding: "20px", display: "flex" }}>
          {/* box with image and amount add */}
          <div>
            <div
              style={{
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

            {/* amount + - */}
            <Box sx={{ display: "flex", fontSize: "18px" }}>
              <div
                onClick={() => handleDecrementItemAmount(item)}
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
                onClick={() => handleIncrementItemAmount(item)}
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
              <Typography variant="h6" sx={{ width: "500px" }}>
                {item.title}
              </Typography>
              <DeleteOutlineOutlinedIcon
                onClick={() => dispatch(removeFromCart(item.id))}
                sx={{ cursor: "pointer" }}
                fontSize="large"
              />
            </div>
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                bottom: "40px",
                right: "40px",
              }}
            >
              Price: <b>{item.price}</b> $
            </Typography>
          </div>
        </Box>
      </Paper>
    </>
  );
};
