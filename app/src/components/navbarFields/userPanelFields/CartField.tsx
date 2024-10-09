import { Box, Tooltip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { StyledBadge } from "../../../mui/styledComponents";
import { useCartField } from "../../../lib/hooks/navbarFields/userPanelFields/useCartField";

export const CartField = () => {
  //
  ////DATA
  const { quantity } = useCartField();

  ////UI
  return (
    <>
      <Link to="/cart" style={{ color: "inherit" }}>
        <Box sx={{ padding: "10px", marginLeft: "10px" }}>
          <Tooltip title="View Cart">
            <StyledBadge badgeContent={quantity} color="secondary">
              <ShoppingCartIcon fontSize="large" />
            </StyledBadge>
          </Tooltip>
        </Box>
      </Link>
    </>
  );
};
