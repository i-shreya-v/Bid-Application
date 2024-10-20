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
import image from "../images/Image.png";
import Bottom from "../images/Bottom.png";
import Success from "../images/SignupSuccess.png";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [successFlag, setSuccessFlag] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = () => {
    setSuccessFlag(true);
  };

  return (
    <Card sx={{ maxHeight: "100%", maxWidth: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "White" }}>
        <Box paddingLeft={10} paddingTop={1} paddingBottom={1}>
          <img alt="" src={Vector} />
          <img alt="" src={Logo} />
        </Box>
      </AppBar>
      {successFlag === false ? (
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
                  <Typography variant="h6">SignUp</Typography>
                  <p>
                    New bidders, as soon as you have submitted your
                    <br />
                    information you will be eligible to bid in the auction.
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
                      label="First Name"
                      size="small"
                      fullWidth
                    />

                    <TextField
                      required
                      id="outlined-required"
                      label="Last Name"
                      size="small"
                      fullWidth
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Email Address"
                      size="small"
                      fullWidth
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
                      label="Receive outbit emails"
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
                <Box paddingLeft={25}>
                  <img
                    alt=""
                    src={image}
                    style={{
                      width: "400.32px",
                      height: "353.77px",
                      top: "233px",
                      left: "837px",
                      gap: "0px",
                      opacity: "0px",
                    }}
                  />
                </Box>
              </Grid2>
            </Stack>
          </Grid2>
        </Card>
      ) : (
        <Card>
          <Grid2>
            <Stack direction="row" spacing={1} alignItems="center">
              <Grid2 sx={{ paddingLeft: "78px", paddingTop: "40px" }}>
                <Box
                  sx={{
                    width: 1500,
                    height: 600,
                    borderRadius: 1,
                  }}
                >
                  {/* <img
                    alt=""
                    src={SuccessMsg}
                    style={{ width: 800, height: 40, paddingLeft: 200 }}
                  /> */}
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Typography variant="h4" alignContent="center">
                      Uncover Deals, Unleash Excitement:
                    </Typography>
                    <Typography variant="h4" color="Blue">
                      Dive into Our Actions Today!
                    </Typography>
                  </Stack>
                  <img
                    alt=""
                    src={Success}
                    style={{
                      width: 800,
                      height: 400,
                      paddingLeft: 350,
                    }}
                  />
                  <Stack direction="row" justifyContent="center" paddingTop={5}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "rgba(29, 78, 216, 1, 90, 215, 254, 1)",
                      }}
                    >
                      Login now
                    </Button>
                  </Stack>
                </Box>
              </Grid2>
            </Stack>
          </Grid2>
        </Card>
      )}
    </Card>
  );
}
export default Signup;
