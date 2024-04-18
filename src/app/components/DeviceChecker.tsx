"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

interface DeviceCheckerProps {
  children: (props: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }) => React.ReactNode;
}

const DeviceChecker: React.FC<DeviceCheckerProps> = ({ children }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    setDeviceInfo({ isMobile, isTablet, isDesktop });
  }, [theme]);

  return children(deviceInfo);
};

export default DeviceChecker;
