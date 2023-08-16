"use client";

import { Box, Grid } from "@mui/material";
import Movie, { IMovie } from "../Movie";

import { useState } from "react";

const Movies = () => {
  const jsonData = {
    movies: [
      {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: ["Crime", "Drama"],
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman"],
        rating: 9.3,
      },
      {
        title: "The Godfather",
        year: 1972,
        genre: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
        rating: 9.2,
      },
      {
        title: "The Dark Knight",
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
        rating: 9.0,
      },
      {
        title: "Inception",
        year: 2010,
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        rating: 8.8,
      },
    ],
  };

  const [movies] = useState<IMovie[]>(jsonData.movies);

  return (
    <Grid container spacing={2}>
      {movies?.map((movie) => (
        <Grid item xl={3} md={6} sm={12} xs={12}>
          <Box className="flex h-full">
            <Movie data={movie} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
export default Movies;
