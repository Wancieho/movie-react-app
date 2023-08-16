"use client";

import { Grid, Typography } from "@mui/material";

import Movies from "@/app/components/Movies";
import { useTranslation } from "react-i18next";

const MoviesPage = () => {
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1" className="text-gray-500">
          {t("movies")}
        </Typography>
      </Grid>
      <Movies />
    </Grid>
  );
};
export default MoviesPage;
