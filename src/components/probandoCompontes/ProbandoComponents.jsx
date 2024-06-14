import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const ProbandoComponents = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      style={{
        padding: "50px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField label="Email" variant="outlined" fullWidth />
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff color="primary" />
                ) : (
                  <Visibility color="secondary" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button
        fullWidth={true}
        disabled={false}
        variant="contained"
        sx={{ textTransform: "none" }}
      >
        Ingresar
      </Button>
    </form>
  );
};

export default ProbandoComponents;
