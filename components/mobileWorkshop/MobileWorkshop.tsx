import React from "react";
import styles from "./MobileWorkshop.module.css";
import Image from "next/image";

function MobileWorkshop({
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
}: any) {
  return (
    <div className={styles.container}>
      <div className={styles.workshop_left}>
        <Image
          className={styles.image}
          src={"/assets/workshop/image1.png"}
          alt="img1"
          fill={true}
        />
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
        <p className={styles.details}>View details</p>
        <button className={styles.join}>Join Challenge | ₹ {price}</button>
      </div>
    </div>
  );
}

export default MobileWorkshop;
