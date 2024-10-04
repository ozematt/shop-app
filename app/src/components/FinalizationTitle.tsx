import { Typography } from "@mui/material";

export const FinalizationTitle = ({ text }: { text: string }) => {
  return (
    <>
      <Typography variant="h5" sx={{ padding: "10px" }}>
        {text}
      </Typography>
    </>
  );
};
