import { TextField, Box, Typography } from "@mui/material";
import { useState } from "react";
import { validateEmail } from "../../validation/user";

const EmailField = (props) => {
  const { touched, error, setState, ...rest } = props;
  const [value, setValue] = useState(rest.value ?? "");
  function handleChange(e) {
    const value = e.currentTarget.value;
    setValue(value);
    if (touched) {
      setState((prev) => ({ ...prev, value, error: validateEmail(value) }));
    }
  }
  function handleBlur(e) {
    if (touched) return;
    const value = e.currentTarget.value;
    setState({
      value,
      touched: true,
      error: validateEmail(value),
    });
  }
  return (
    <Box component={"div"}>
      <TextField
        {...rest}
        name="email"
        label="Email"
        error={!!error}
        variant="outlined"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        fullWidth
      />
      {error && (
        <Typography variant="caption" color="error">
          * {error}
        </Typography>
      )}
    </Box>
  );
};

export default EmailField;
