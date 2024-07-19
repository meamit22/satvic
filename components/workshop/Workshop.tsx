import React from "react";
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
