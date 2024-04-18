import { Grid } from "@mui/material";
import CustomCard from "./components/CustomCard";

export default function Home() {
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: 1, marginTop: 1 }}>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}
