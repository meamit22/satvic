"use client";
import React, { useState } from "react";
import styles from "./Workshop.module.css";
import Image from "next/image";
import WebButtons from "../webButtons/WebButtons";

function Workshop({
  title,
  rating,
  ratingCount,
  desc,
  showTag = false,
  tag,
  language,
  startDate,
  days,
  price,
  imgSrc,
}: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/workshop/image1.png",
    "/assets/workshop/image2.png",
    "/assets/workshop/image3.png",
    "/assets/workshop/image4.png",
  ];
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
          width={48}
          height={48}
          className={styles.left_arrow}
          onClick={handlePrev}
        />
        <Image
          src={"/assets/workshop/right.svg"}
          alt="left"
          width={48}
          height={48}
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
        <div className={styles.header}>
          <div className={styles.left_header}>{title}</div>
          {showTag && (
            <div className={styles.tag}>
              <div className={styles.heart_icon}>
                <Image
                  src={"/assets/workshop/hearticon.svg"}
                  alt="heart"
                  fill={true}
                />
              </div>
              {tag}
            </div>
          )}
        </div>
        <div className={styles.rating}>
          <div className={styles.rating_tag}>
            {rating}
            <Image
              src={"/assets/workshop/star_icon.svg"}
              alt="star"
              width={12}
              height={12}
            />
          </div>
          <div className={styles.rating_count}>{ratingCount} reviews</div>
        </div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.info}>
          <div className={styles.info_tag}>
            <Image
              src={"/assets/workshop/calender.svg"}
              alt="icon"
              width={32}
              height={32}
            />
            <div className={styles.info_right}>
              <div className={styles.top}>{startDate}</div>
              <div className={styles.bottom}>Start Date</div>
            </div>
          </div>
          <div className={styles.info_tag}>
            <Image
              src={"/assets/workshop/duration.svg"}
              alt="icon"
              width={32}
              height={32}
            />
            <div className={styles.info_right}>
              <div className={styles.top}>{days} Days</div>
              <div className={styles.bottom}>Duration</div>
            </div>
          </div>
          <div className={styles.info_tag}>
            <Image
              src={"/assets/workshop/language.svg"}
              alt="icon"
              width={32}
              height={32}
            />
            <div className={styles.info_right}>
              <div className={styles.top}>{language}</div>
              <div className={styles.bottom}>Language</div>
            </div>
          </div>
        </div>
        <div className={styles.price}>₹ {price}</div>
        <WebButtons />
        <div className={styles.people_joined}>
          <Image
            src={"/assets/workshop/users.svg"}
            alt="users"
            width={22}
            height={22}
          />
          3480 have already joined
        </div>
      </div>
    </div>
  );
}

export default Workshop;
