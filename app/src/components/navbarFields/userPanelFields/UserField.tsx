import { Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useUserField } from "../../../lib/hooks/navbar/useUserField";
import { AlertDialog } from "../../AlertDialog";

export const UserField = () => {
  //
  ////DATA
  const {
    handleMenu,
    handleClose,
    handleOrdersHistory,
    handleLogOut,
    handleCloseDialogAlert,
    open,
    anchorEl,
  } = useUserField();

  ////UI
  return (
    <>
      <IconButton
        sx={{ marginRight: "10px" }}
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Tooltip title="User Options">
          <AccountCircleIcon fontSize="large" />
        </Tooltip>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOrdersHistory}>Orders</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
      </Menu>

      <AlertDialog
        open={open}
        handleCloseDialogAlert={handleCloseDialogAlert}
      />
    </>
  );
};
