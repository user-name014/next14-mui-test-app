"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

const useDeviceType = () => {
  // min-width: 1024px を基準にしてデバイスがPCかどうかをチェック
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return isDesktop;
};

export default useDeviceType;
