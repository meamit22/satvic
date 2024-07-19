import React from "react";
import Header from "../header/Header";
import { getDeviceTypeOnServer } from "@/utils/utils";
import { headers } from "next/headers";
import MobileHeader from "../mobileHeader/MobileHeader";
import styles from "./LandingPage.module.css";
import Image from "next/image";
import Workshops from "../workshops/Workshops";
import MobileWorkshops from "../mobileWorkshops/MobileWorkshops";

function LandingPage() {
  const isMobile = getDeviceTypeOnServer(headers);
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <div className={styles.lower_body}>
        <div className={styles.banner}>
          {isMobile ? (
            <Image
              src={"/assets/landingPage/mobile_banner.png"}
              alt="banner"
              fill={true}
            />
          ) : (
            <Image
              src={"/assets/landingPage/web_banner.png"}
              alt="banner"
              fill={true}
            />
          )}
        </div>
        {isMobile ? (
          <MobileWorkshops />
        ) : (
          <div className={styles.workshops_container}>
            <div className={styles.workshop}>
              <Workshops />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LandingPage;
