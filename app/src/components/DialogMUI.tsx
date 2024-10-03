import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";

export const AlertDialog = ({
  open,
  handleCloseDialogAlert,
}: {
  open: boolean;
  handleCloseDialogAlert: () => void;
}) => {
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
          <Button variant="text" onClick={handleCloseDialogAlert}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
