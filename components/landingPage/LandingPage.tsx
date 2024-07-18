import React from "react";
import Header from "../header/Header";
import { getDeviceTypeOnServer } from "@/utils/utils";
import { headers } from "next/headers";
import MobileHeader from "../mobileHeader/MobileHeader";

function LandingPage() {
  const isMobile = getDeviceTypeOnServer(headers);
  return <>{isMobile ? <MobileHeader /> : <Header />} </>;
}

export default LandingPage;
