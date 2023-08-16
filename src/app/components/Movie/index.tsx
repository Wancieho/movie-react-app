import { Card, CardContent, Typography } from "@mui/material";

import Label from "../Label";

export type IMovie = {
  title: string;
  year: number;
  director: string | string[];
  actors: string[];
  rating: number;
  genre: string[];
};

type Props = {
  data: IMovie;
};

const Movie = ({ data }: Props) => {
  return (
    <Card className="flex-1">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data.title} ({data.year})
        </Typography>
        <Typography className="p-1 text-sm bg-gray-100" gutterBottom>
          <Label text="Director" />
          {data.director}
        </Typography>
        <Typography className="p-1 text-xs bg-gray-100" gutterBottom>
          <Label text="Actors" />
          {data.actors.join(", ")}
        </Typography>
        <Typography className="p-1 text-xs bg-gray-100" gutterBottom>
          <Label text="Genre" />
          {data.genre.join(", ")}
        </Typography>
        <Typography>{data.rating}</Typography>
      </CardContent>
    </Card>
  );
};
export default Movie;
