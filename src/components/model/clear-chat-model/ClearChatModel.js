import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import classes from "./model.module.scss";
import PrimaryButton from "@/app/commons/buttons/PrimaryButton";
import SecondaryButton from "@/app/commons/buttons/SecondaryButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ClearChatModel({ isModelOpen, setModelOpen }) {
  const handleClose = () => setModelOpen(false);

  return (
    <div className={classes["container"]}>
      <Modal
        open={isModelOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes["icon"]}>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </div>
          <div className={classes["content"]}>
            <h1>Clear all chats !</h1>
            <h2>Are you sure ?</h2>
            <div className={classes["btn-group"]}>
              <PrimaryButton className={classes["primary-btn"]}>
                Yes
              </PrimaryButton>
              <SecondaryButton
                className={classes["seconday-btn"]}
                onClick={handleClose}
              >
                No
              </SecondaryButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
