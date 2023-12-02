import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { validatePassword } from "../validation/user";

function PasswordField(props) {
  const { id, name, touched, error, setState, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(rest.value ?? "");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  function handleChange(e) {
    const value = e.currentTarget.value;
    setValue(value);
    if (touched) {
      setState((prev) => ({ ...prev, value, error: validatePassword(value) }));
    }
  }
  function handleBlur(e) {
    if (touched) return;
    const value = e.currentTarget.value;
    setState({
      value,
      touched: true,
      error: validatePassword(value),
    });
  }

  return (
    <FormControl error={!!error} variant="outlined">
      <InputLabel htmlFor={id}>Password</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {error && (
        <Typography variant="caption" color="error">
          * {error}
        </Typography>
      )}
    </FormControl>
  );
}

export default PasswordField;
