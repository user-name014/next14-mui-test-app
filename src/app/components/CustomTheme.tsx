"use client";

import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export const CustomTheme = (props: { children: React.ReactNode }) => {
  // ダークモードかどうかを判定
  const mode = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";

  // テーマを設定
  const theme = createTheme({
    palette: {
      mode: "light",
      // mode: mode,
      primary: {
        main: "#007FFF",
      },
      action: {
        active: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* CSSの初期化 */}
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
