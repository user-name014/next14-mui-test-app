import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Job {
  jobName: string;
  image: string;
  color: string; // Assuming you might want to use it later for styling
}

interface CustomCardProps {
  job: Job;
}

const CustomCard: React.FC<CustomCardProps> = ({ job }) => {
  return (
    <Card sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 0 auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h3" sx={{ textAlign: "center" }}>
            {job.jobName}
          </Typography>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 140, height: 140, objectFit: "contain" }}
        image={job.image}
        alt={job.jobName}
      />
    </Card>
  );
};

export default CustomCard;
