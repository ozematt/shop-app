import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch, useAppDispatch } from "../../../../redux/store";
import { logOutUser, removeOrders } from "../../../../redux/user/userSlice";
import { removeAllFromCart } from "../../../../redux/cart/cartSlice";

export const useUserField = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); //user menu
  const [open, setOpen] = useState<boolean>(false); //alert dialog state

  ////LOGIC
  // user options menu
  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  // menu close
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  // orders history navigate
  const handleOrdersHistory = useCallback(() => {
    navigate("/orders");
    setAnchorEl(null);
  }, [navigate]);

  // open alert dialog
  const handleLogOut = useCallback(() => {
    setOpen(true);
  }, []);

  // when alert dialog closed, logout user
  const handleCloseDialogAlert = useCallback(
    (confirm: boolean) => {
      setOpen(false);
      if (confirm) {
        dispatch(logOutUser());
        dispatch(removeAllFromCart());
        navigate("/");
      }
    },
    [dispatch, navigate]
  );

  return {
    handleMenu,
    handleClose,
    handleOrdersHistory,
    handleLogOut,
    handleCloseDialogAlert,
    open,
    anchorEl,
  };
};
