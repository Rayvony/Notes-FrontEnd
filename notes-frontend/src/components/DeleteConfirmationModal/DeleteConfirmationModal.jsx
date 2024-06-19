import { Modal, Paper, Button, Typography } from "@mui/material";
import styles from "./DeleteConfirmationModal.module.css";

const DeleteConfirmationModal = ({ open, handleClose, handleConfirmDelete }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.modal}>
        <Paper elevation={3} className={styles.paper}>
          <Typography variant='h6'>Are you sure you want to delete this note?</Typography>
          <div className={styles.buttons}>
            <Button color='purple' onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} variant='contained' color='error'>
              Delete
            </Button>
          </div>
        </Paper>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
