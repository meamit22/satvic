"use client";
import React, { useState } from "react";
import styles from "./MobileWorkshop.module.css";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import JoinForm from "../joinForm/JoinForm";

function MobileWorkshop({
  title,
  rating,
  ratingCount,
  desc,
  language,
  startDate,
  days,
  price,
  imgSrc,
}: any) {
  const [openDialog, setOpenDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/workshop/image1.png",
    "/assets/workshop/image2.png",
    "/assets/workshop/image3.png",
    "/assets/workshop/image4.png",
  ];
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.workshop_left}>
        <Image
          className={styles.image}
          src={images[currentIndex]}
          alt="img1"
          fill={true}
        />
        <Image
          src={"/assets/workshop/left.svg"}
          alt="left"
          width={38}
          height={38}
          className={styles.left_arrow}
          onClick={handlePrev}
        />
        <Image
          src={"/assets/workshop/right.svg"}
          alt="left"
          width={38}
          height={38}
          className={styles.right_arrow}
          onClick={handleNext}
        />
        <div className={styles.bulletsContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.bullet} ${
                index === currentIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className={styles.workshop_right}>
        <div className={styles.left_header}>{title}</div>
        <div className={styles.rating}>
          <div className={styles.rating_tag}>
            {rating}
            <Image
              src={"/assets/workshop/star_icon.svg"}
              alt="star"
              width={10}
              height={10}
            />
          </div>
          <div className={styles.rating_count}>{ratingCount} reviews</div>
        </div>
        <div className={styles.info}>
          <div className={styles.info_tag}>
            <Image
              src={"/assets/workshop/calender.svg"}
              alt="icon"
              width={16}
              height={16}
            />
            <div className={styles.top}>{startDate}</div>
          </div>
          |
          <div className={styles.info_tag}>
            <Image
              src={"/assets/workshop/duration.svg"}
              alt="icon"
              width={16}
              height={16}
            />
            <div className={styles.top}>{days} Days</div>
          </div>
          |
          <div className={styles.info_tag}>
            <Image
              src={"/assets/workshop/language.svg"}
              alt="icon"
              width={16}
              height={16}
            />
            <div className={styles.top}>{language}</div>
          </div>
        </div>
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.buttons_container}>
        <p onClick={handleOpen} className={styles.details}>
          View details
        </p>
        <button onClick={handleOpen} className={styles.join}>
          Join Challenge | ₹ {price}
        </button>
      </div>
      <Drawer
        anchor="bottom"
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: "max-content",
            borderRadius: "12px 12px 0 0",
          },
        }}
      >
        <JoinForm setOpenDialog={setOpenDialog} />
      </Drawer>
    </div>
  );
}

export default MobileWorkshop;
