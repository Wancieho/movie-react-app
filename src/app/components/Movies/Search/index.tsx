import { includes, some, toLower } from "lodash";

import { ChangeEvent } from "react";
import { IMovie } from "../../Movie";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  data: IMovie[];
  onChange: (movies: IMovie[]) => void;
};

const Search = ({ onChange, data }: Props) => {
  const { t } = useTranslation();

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(
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
      InputProps={{
        className: "bg-white",
      }}
      label={t("search")}
      onChange={filter}
      className="w-full"
    />
  );
};
export default Search;
