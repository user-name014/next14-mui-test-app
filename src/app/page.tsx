"use client";

import { Grid, Typography, Link } from "@mui/material";
import CustomCard from "./components/CustomCard";
import jobsData from "./components/DummyData";
import { Box } from "@mui/system";
import useDeviceType from "./components/useDeviceType";

export default function Home() {
  const isDesktop = useDeviceType();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {jobsData.map((job) => (
          <Grid item xs={12} sm={6} md={3} key={job.id}>
            <CustomCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: 300, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          <Typography variant="body1">
            {isDesktop
              ? "このデバイスはPCです。"
              : "このデバイスはPCではありません。"}
          </Typography>
        </Typography>
        <Typography component="div">
          <Link
            href="#"
            underline="hover"
            sx={{ display: "block", marginBottom: 1 }}
          >
            最新
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{ display: "block", marginBottom: 1 }}
          >
            人気
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{ display: "block", marginBottom: 1 }}
          >
            トレンド
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
