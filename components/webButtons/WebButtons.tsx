"use client";
import React, { useState } from "react";
import styles from "./WebButtons.module.css";
import Dialog from "@mui/material/Dialog";
import JoinForm from "../joinForm/JoinForm";

function WebButtons() {
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleOpen = () => {
    setOpenDialog(true);
  };
  return (
    <div className={styles.container}>
      <button onClick={handleOpen} className={styles.join_button}>
        Join the challenge
      </button>
      <button onClick={handleOpen} className={styles.details_button}>
        View Details
      </button>
      <Dialog
        onClose={handleClose}
        open={openDialog}
        PaperProps={{
          style: {
            height: "85vh",
            width: "50vw",
          },
        }}
      >
        <JoinForm setOpenDialog={setOpenDialog} />
      </Dialog>
    </div>
  );
}

export default WebButtons;
