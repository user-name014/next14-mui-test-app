import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CustomCard() {
  return (
    <Card sx={{ display: "flex", width: "100%" }}>
      {/* ジョブ名 */}
      <Box sx={{ display: "flex", flexDirection: "column", flex: "1 0 auto" }}>
        <CardContent>
          <Typography component="div" variant="h2">
            学者
          </Typography>
        </CardContent>
      </Box>
      {/* 画像 */}
      <CardMedia
        component="img"
        sx={{ width: "auto", height: 140, objectFit: "contain" }} // objectFitを追加
        image="/jobIcon/学者.png"
        alt="Contemplative Reptile"
      />
    </Card>
  );
}
