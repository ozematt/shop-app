import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { StyledBadge } from "../../mui/styledComponents";

export const CartField = () => {
  //
  ////DATA
  const quantity = useSelector((state: RootState) => state.cart.quantity);

  ////UI
  return (
    <>
      <Link to="/cart" style={{ color: "inherit" }}>
        <IconButton
          sx={{ marginLeft: "10px" }}
          size="large"
          aria-label="cart of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <Tooltip title="View Cart">
            <StyledBadge badgeContent={quantity} color="secondary">
              <ShoppingCartIcon fontSize="large" />
            </StyledBadge>
          </Tooltip>
        </IconButton>
      </Link>
    </>
  );
};
