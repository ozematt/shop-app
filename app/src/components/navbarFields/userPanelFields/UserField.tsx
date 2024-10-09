import { Box, Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useUserField } from "../../../lib/hooks/navbarFields/userPanelFields/useUserField";
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
      <Box
        sx={{ padding: "10px 10px 4px 10px", marginRight: "10px" }}
        onClick={handleMenu}
      >
        <Tooltip title="User Options">
          <AccountCircleIcon fontSize="large" />
        </Tooltip>
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOrdersHistory}> Orders</MenuItem>
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
