import React from "react";
import styles from "./MobileHeader.module.css";
import Image from "next/image";

function MobileHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/assets/header/mobile_logo.png"} alt="" fill={true} />
      </div>
      <div className={styles.menu}>
        <Image src={"/assets/header/burger_menu.svg"} alt="" fill={true} />
      </div>
    </div>
  );
}

export default MobileHeader;
