"use client";

import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export const CustomTheme = (props: { children: React.ReactNode }) => {
  const mode = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";
  // カスタムシーン
  const theme = createTheme({
    palette: { mode }, // ここを'light', 'dark'と設定すると一発で変わる
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
