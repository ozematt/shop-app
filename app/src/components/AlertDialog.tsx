import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

type AlertDialogProps = {
  open: boolean;
  handleCloseDialogAlert: (confirmed: boolean) => void;
};

export const AlertDialog = React.memo(
  ({ open, handleCloseDialogAlert }: AlertDialogProps) => {
    //
    ////UI
    return (
      <>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"You have been successfully logged out!"}
          </DialogTitle>
          <DialogActions>
            <Button variant="text" onClick={() => handleCloseDialogAlert(true)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
);
