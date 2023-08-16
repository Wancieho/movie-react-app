import { Grid, Typography } from "@mui/material";

import Movies from "@/app/components/Movies";

const MoviesPage = () => {
  return (
    <Grid container padding={2}>
      <Grid item xs={12}>
        <Typography variant="h1" className="text-white">
          Movies
        </Typography>
      </Grid>
      <Movies />
    </Grid>
  );
};
export default MoviesPage;
