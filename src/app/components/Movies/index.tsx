"use client";

import { Box, Grid } from "@mui/material";
import Movie, { IMovie } from "../Movie";

import Search from "./Search";
import jsonData from "../../data/movies.json";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Movies = () => {
  const { t } = useTranslation();

  const [movies, setMovies] = useState<IMovie[]>(jsonData.movies);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Search setMovies={setMovies} data={jsonData.movies} />
      </Grid>
      {movies?.length > 0 && (
        <>
          {movies.map((movie) => (
            <Grid key={JSON.stringify(movie)} item xl={3} md={4} sm={6} xs={12}>
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
