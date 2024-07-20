"use client";
import React, { useState } from "react";
import styles from "./JoinForm.module.css";
import Image from "next/image";
import TextField from "@mui/material/TextField";

function JoinForm({ setOpenDialog }: any) {
  const [formType, setFormType] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.city;
  };
  const handleButton = () => {
    setOpenDialog(false);
  };
  const handleContinueButton = () => {
    setFormType("payment");
  };
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
            onClick={() => {
              setOpenDialog(false);
            }}
            className={styles.cross_icon}
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
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
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
          <div className={styles.inputs}>
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                },
              }}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 4px 20px 0px #2b2b2b14",
              }}
            />
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Email ID"
              variant="filled"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                },
              }}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 4px 20px 0px #2b2b2b14",
              }}
            />
            <TextField
              className={styles.input}
              id="standard-basic"
              label="Enter Your City"
              variant="filled"
              name="city"
              value={formData.city}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                },
              }}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 4px 20px 0px #2b2b2b14",
              }}
            />
          </div>
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
        {formType === "mobile" ? (
          <button
            disabled={mobile.length !== 10}
            onClick={handleContinueButton}
            className={`${styles.continue} ${
              mobile.length !== 10 ? styles.disabled : ""
            }`}
          >
            Continue
          </button>
        ) : (
          <button
            disabled={!isFormValid()}
            onClick={handleButton}
            className={`${styles.continue} ${
              !isFormValid() ? styles.disabled : ""
            }`}
          >
            Continue to payment
          </button>
        )}
      </div>
    </div>
  );
}

export default JoinForm;
