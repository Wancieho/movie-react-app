import { Box, Card, CardContent, Typography } from "@mui/material";

import Label from "../Label";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const InfoBlock = ({
    title,
    info,
  }: {
    title: string;
    info: string | string[];
  }) => {
    return (
      <Box className="p-2 mb-2 text-sm bg-gray-100">
        <Label text={title} />
        {info}
      </Box>
    );
  };

  return (
    <Card className="flex-1">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data?.title} ({data?.year})
        </Typography>
        <InfoBlock title={t("director")} info={data?.director} />
        <InfoBlock title={t("actors")} info={data?.actors.join(", ")} />
        <InfoBlock title={t("genre")} info={data?.genre.join(", ")} />
        <Typography>{data?.rating}</Typography>
      </CardContent>
    </Card>
  );
};
export default Movie;
