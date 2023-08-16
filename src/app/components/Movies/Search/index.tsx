import { includes, some, toLower } from "lodash";

import { ChangeEvent } from "react";
import { IMovie } from "../../Movie";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  setMovies: any;
  data: IMovie[];
};

const Search = ({ setMovies, data }: Props) => {
  const { t } = useTranslation();

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    setMovies(
      data.filter((movie) =>
        some(movie, (value: string) =>
          includes(toLower(value), toLower(e.target.value))
        )
      )
    );
  };

  return (
    <TextField
      variant="filled"
      className="bg-white"
      label={t("search")}
      onChange={filter}
    />
  );
};
export default Search;
