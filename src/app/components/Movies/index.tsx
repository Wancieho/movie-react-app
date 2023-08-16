"use client";

import { Box, CircularProgress, Grid, TextField } from "@mui/material";
import Movie, { IMovie } from "../Movie";

import jsonData from "../../data/movies.json";
import { useState } from "react";

const Movies = () => {
  const [movies] = useState<IMovie[]>(jsonData.movies);

  const filter = (e: any) => {
    console.info("e", e);
  };

  return (
    <Grid container spacing={2}>
      {!movies && <CircularProgress />}
      {movies && (
        <>
          <Grid item xs={12}>
            <TextField label="Outlined" variant="outlined" onChange={filter} />
          </Grid>
          {movies.map((movie) => (
            <Grid
              key={JSON.stringify(movie)}
              item
              xl={3}
              md={6}
              sm={12}
              xs={12}
            >
              <Box className="flex h-full">
                <Movie data={movie} />
              </Box>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};
export default Movies;
