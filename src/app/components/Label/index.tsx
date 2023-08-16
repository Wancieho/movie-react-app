import { Typography } from "@mui/material";

type Props = {
  text: string;
  size?: "lg" | "md" | "sm" | "xs";
};

const Label = ({ text, size = "sm" }: Props) => {
  return (
    <Typography className={`text-black font-bold text-${size}`}>
      {text}&nbsp;
    </Typography>
  );
};
export default Label;
