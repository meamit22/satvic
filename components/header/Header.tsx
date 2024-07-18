import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header_left}>
        <Image src={"/assets/header/satvic_logo.png"} alt="logo" fill={true} />
      </div>
      <div className={styles.header_center}>
        <CenterTag title={"HOME"} />
        <CenterTag title={"About Us"} />
        <CenterTag title={"Workshops"} />
        <CenterTag title={"Food Books"} showArrow={true} />
        <CenterTag title={"Products"} showArrow={true} />
        <CenterTag title={"Videos"} />
        <CenterTag title={"Healing Stories"} showArrow={true} />
        <CenterTag title={"Contact Us"} />
        <CenterTag title={"Workshop Login"} />
      </div>
      <div className={styles.header_right}>
        <Image src={"/assets/header/header_right.svg"} alt="logo" fill={true} />
      </div>
    </div>
  );
}

export default Header;

const CenterTag = ({ title, showArrow = false }: any) => {
  return (
    <div className={styles.tag_container}>
      <p className={styles.title}>{title}</p>
      {showArrow && (
        <div className={styles.down_arrow}>
          <Image src={"/assets/header/down_arrow.svg"} alt="" fill={true} />
        </div>
      )}
    </div>
  );
};
