"use client";
import React, { useState } from "react";
import styles from "./JoinForm.module.css";
import Image from "next/image";

function JoinForm() {
  const [formType, setFormType] = useState("mobil");
  return (
    <div className={styles.container}>
      <div className={styles.top_info}>
        <div className={styles.top_bar}>
          <div className={styles.checker}></div>
          <div
            className={`${styles.checker} ${
              formType === "mobile" ? styles.inactive : ""
            }`}
          ></div>
          <Image
            src={"/assets/form/cross.svg"}
            alt="cross"
            width={12}
            height={12}
          />
        </div>
        <div className={styles.plan}>
          <div className={styles.title}>Heal Yourself Challenge</div>
          <div className={styles.info}>
            <div className={styles.info_tag}>
              <Image
                src={"/assets/workshop/calender.svg"}
                alt="icon"
                width={16}
                height={16}
              />
              <div className={styles.top}>16th May</div>
            </div>
            <div className={styles.info_tag}>
              <Image
                src={"/assets/workshop/duration.svg"}
                alt="icon"
                width={16}
                height={16}
              />
              <div className={styles.top}>21 Days</div>
            </div>
            <div className={styles.info_tag}>
              <Image
                src={"/assets/workshop/language.svg"}
                alt="icon"
                width={16}
                height={16}
              />
              <div className={styles.top}>English</div>
            </div>
          </div>
        </div>
        <div className={styles.session}>
          <div className={styles.timming}>
            Session timings: 8 - 8:45 am (IST)
          </div>
          <div className={styles.recording}>
            <Image
              src={"/assets/form/video.svg"}
              alt="cross"
              width={12}
              height={12}
            />
            Recording available for 24 hours
          </div>
        </div>
      </div>
      {formType === "mobile" ? (
        <div className={styles.bottom_number}>
          <div className={styles.number_heading}>Your mobile number</div>
          <div className={styles.phoneInputContainer}>
            <div className={styles.flagContainer}>
              <Image
                src={"/assets/form/flag.svg"}
                alt="flag"
                width={24}
                height={24}
              />
              <span className={styles.code}>+91 |</span>
            </div>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className={styles.phoneInput}
            />
          </div>
          <div className={styles.warning}>
            <Image
              src={"/assets/form/info.svg"}
              alt="cross"
              width={18}
              height={18}
            />
            You can access the workshop using this number
          </div>
        </div>
      ) : (
        <div className={styles.bottom_desc}>
          <div className={styles.help}>
            <div className={styles.help_title}>
              This workshop can help you heal the following:
            </div>
            <div className={styles.tags}>
              <div className={styles.help_tag}>Thyroid imbalance</div>
              <div className={styles.help_tag}>Excess weight</div>
              <div className={styles.help_tag}>High BP</div>
              <div className={styles.help_tag}>Diabetes type 2</div>
              <div className={styles.help_tag}>PCOD</div>
              <div className={styles.help_tag}>Asthma or sinusitis</div>
            </div>
          </div>
          <div className={styles.help}>
            <div className={styles.help_title}>
              However, it will not be sufficient for the following conditions:{" "}
            </div>
            <div className={styles.tags}>
              <div className={styles.help_tag}>Thyroid imbalance</div>
              <div className={styles.help_tag}>Excess weight</div>
              <div className={styles.help_tag}>High BP</div>
              <div className={styles.help_tag}>Diabetes type 2</div>
              <div className={styles.help_tag}>PCOD</div>
              <div className={styles.help_tag}>Asthma or sinusitis</div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.bottom_button}>
        <button className={styles.continue}>
          {formType === "mobile" ? "Continue" : "Continue to payment"}
        </button>
      </div>
    </div>
  );
}

export default JoinForm;
