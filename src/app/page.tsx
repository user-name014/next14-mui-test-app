import { Grid } from "@mui/material";
import CustomCard from "./components/CustomCard";
import jobsData from "./components/DummyData";

export default function Home() {
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: 1, marginTop: 1 }}>
        {jobsData.map((job) => (
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard key={job.id} job={job} />
          </Grid>
        ))}
      </Grid>
      <div></div>
    </div>
  );
}
