"use client";

import { Box, Grid, Typography } from "@mui/material";
import Movie, { IMovie } from "../Movie";
import { useEffect, useState } from "react";

import FilterByGenre from "./FilterByGenre";
import Search from "./Search";
import jsonData from "../../data/movies.json";
import { some } from "lodash";
import { useTranslation } from "react-i18next";

const Movies = () => {
  const { t } = useTranslation();

  const [movies, setMovies] = useState<IMovie[]>(jsonData.movies);
  const [searchedMovies, setSearchedMovies] = useState<IMovie[]>(
    jsonData.movies
  );
  const [movieGenres, setMovieGenres] = useState<string[]>([]);

  const searchHandler = (data: IMovie[]) => {
    setSearchedMovies(data);
  };

  const genreHandler = (genres: string[]) => {
    setMovieGenres(genres);
  };

  useEffect(() => {
    setMovies(
      movieGenres.length > 0
        ? searchedMovies.filter((movie) =>
            some(movieGenres, (genre: string) => movie.genre.includes(genre))
          )
        : searchedMovies
    );
  }, [searchedMovies, movieGenres]);

  return (
    <>
      <Grid container spacing={2} className="mb-6">
        <Grid item xs={3}>
          <Search onChange={searchHandler} data={jsonData.movies} />
        </Grid>
        <Grid item xs={3}>
          <FilterByGenre
            genre={Array.from(
              new Set(
                movies
                  .map((movie) => movie.genre)
                  .reduce((acc, genres) => acc.concat(genres), [])
              )
            )}
            onChange={genreHandler}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {movies?.length > 0 &&
          movies?.map((movie) => (
            <Grid key={JSON.stringify(movie)} item xl={3} md={4} sm={6} xs={12}>
              <Box className="flex h-full">
                <Movie data={movie} />
              </Box>
            </Grid>
          ))}
        <Grid item xs={12}>
          {movies.length === 0 && <Typography>{t("noMovies")}</Typography>}
        </Grid>
      </Grid>
    </>
  );
};
export default Movies;
