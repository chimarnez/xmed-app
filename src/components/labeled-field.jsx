import { Typography } from "@mui/material";

const LabeledField = ({ label, children }) => {
  return (
    <>
      <Typography>{children}</Typography>
      <Typography color="text.secondary" variant="caption">
        {label}
      </Typography>
    </>
  );
};

export default LabeledField;
