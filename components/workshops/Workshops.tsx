import React from "react";
import styles from "./Workshops.module.css";
import Workshop from "../workshop/Workshop";

function Workshops() {
  return (
    <div className={styles.container}>
      <Workshop
        title={"Ultimate Health Challenge"}
        rating={"4.8"}
        ratingCount={"3034"}
        desc={
          "If you want to reach your ultimate peak health, then this workshop is for you.  Learn 7 revolutionary habits over a span of 21 days!"
        }
        showTag={true}
        tag={"Must Join"}
        startDate={"6th May"}
        days={"21"}
        language={"English"}
        price={990}
        imgSrc={"/assets/workshop/image1.png"}
      />
      <Workshop
        title={"Heal Yourself Challenge"}
        rating={"4.8"}
        ratingCount={"3034"}
        desc={
          "7 days program to help you learn 9 steps to heal your chronic lifestyle diseases following the Satvic Healing Plan."
        }
        showTag={true}
        tag={"Highly Recommended"}
        startDate={"6th May"}
        days={"21"}
        language={"English"}
        price={990}
        imgSrc={"/assets/workshop/image4.png"}
      />
      <Workshop
        title={"Yoga Challenge"}
        rating={"4.8"}
        ratingCount={"3034"}
        desc={
          "Learn how to manage stress, anxiety, emotional imbalance and fear. Learn yoga philosophy, asanas and meditations to take charge of your joy!"
        }
        startDate={"6th May"}
        days={"21"}
        language={"Hindi,English"}
        price={990}
        imgSrc={"/assets/workshop/image3.png"}
      />
      <Workshop
        title={"7-Day Satvic Food Challenge"}
        rating={"4.8"}
        ratingCount={"3034"}
        desc={
          "Cook-along all three meals with us, and experience the magic of Satvic eating!"
        }
        startDate={"6th May"}
        days={"21"}
        language={"Hindi"}
        price={990}
        imgSrc={"/assets/workshop/image2.png"}
      />
    </div>
  );
}

export default Workshops;
