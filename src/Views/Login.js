import { useState } from "react";
import {
  AppBar,
  Card,
  Grid2,
  Box,
  Typography,
  Stack,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Vector from "../images/Vector.png";
import Logo from "../images/Logo.png";
import image from "../images/Login-Img.png";
import Bottom from "../images/LoginFooter.png";
import LandingPage from "./LandingPage";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [json, setJson] = useState({
    userName: "",
    password: "",
  });
  const loginJson = {
    userName: "Shreya",
    password: "QWErty@20!",
  };
  const [isValidUser, setValidUser] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeEvent = (event) => {
    debugger;
    json[event.target.name] = event.target.value;
    setJson(json);
  };
  const handleSubmit = () => {
    debugger;
    if (
      json.userName === loginJson.userName &&
      json.password === loginJson.password
    ) {
      setValidUser(true);
    }
  };

  return (
    <>
      {isValidUser === false ? (
        <Card sx={{ maxHeight: "100%", maxWidth: "100%" }}>
          <AppBar position="static" sx={{ backgroundColor: "White" }}>
            <Box paddingLeft={10} paddingTop={1} paddingBottom={1}>
              <img alt="" src={Vector} />
              <img alt="" src={Logo} />
            </Box>
          </AppBar>
          <Card>
            <Grid2>
              <Stack direction="row" spacing={1} alignItems="center">
                <Grid2 sx={{ paddingLeft: "78px", paddingTop: "40px" }}>
                  <Box
                    sx={{
                      width: 500,
                      height: 600,
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="h6">Login</Typography>
                    <p>
                      Welcome back. Enter your credentials to access your
                      <br />
                      account
                    </p>
                    <Box
                      sx={{
                        "& .MuiTextField-root": {
                          padding: 0,
                          m: 1,
                          width: "100%",
                        },
                      }}
                    >
                      <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                        size="small"
                        fullWidth
                        onChange={handleChangeEvent}
                        name="userName"
                      />
                      <FormControl
                        sx={{ m: 1, width: "58ch" }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={handleChangeEvent}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Keep me signed in"
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: "rgba(29, 78, 216, 1, 90, 215, 254, 1)",
                        }}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                      <Box paddingTop={2} paddingLeft={5}>
                        <img alt="" src={Bottom} />
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 size={2}>
                  <Box paddingLeft={20}>
                    <img
                      alt=""
                      src={image}
                      style={{
                        width: "756.32px",
                        height: "582.77px",
                        padding: 20,
                        gap: "0px",
                        opacity: "0px",
                      }}
                    />
                  </Box>
                </Grid2>
              </Stack>
            </Grid2>
          </Card>
        </Card>
      ) : (
        <LandingPage />
      )}
    </>
  );
}
export default Login;
