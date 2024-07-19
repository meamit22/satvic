import React from "react";
import styles from "./WebButtons.module.css";

function WebButtons() {
  return (
    <div className={styles.container}>
      <button className={styles.join_button}>Join the challenge</button>
      <button className={styles.details_button}>View Details</button>
    </div>
  );
}

export default WebButtons;
