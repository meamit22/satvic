export const getDeviceTypeOnServer = (headers: any) => {
  const userAgent = headers().get("user-agent");
  return userAgent?.includes("Mobile");
};
