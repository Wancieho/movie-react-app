import { Autocomplete, TextField } from "@mui/material";

type Props = {
  genre: string[];
  onChange: (genres: string[]) => void;
};

const FilterByGenre = ({ genre, onChange }: Props) => {
  return (
    <Autocomplete
      multiple
      options={genre}
      renderInput={(params) => <TextField {...params} label="Genre" />}
      onChange={(_, selected) => {
        onChange(selected);
      }}
      className="bg-white"
    />
  );
};
export default FilterByGenre;
