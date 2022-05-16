import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Input from "../Shared/Input";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ callApi }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({});

  const onInputChange = (prop, value) => {
    const tempValue = { ...loginCredentials, [prop]: value };
    setLoginCredentials(tempValue);
  };

  const loginBtnHandler = () => {
    console.log(loginCredentials);
    callApi(loginCredentials);
  };

  const forgotPasswordHandler = () => {
    navigate("/forgotPassword");
  };
  const signUpBtnHandler = () => {
    navigate("/signUp");
  };
  return (
    <>
      <NavBar />
      <Box className={classes.loginPageBox}>
        <Card className={classes.loginPageCard}>
          <CardContent className={classes.flexColumn}>
            <Typography variant="h6" className={classes.CardHead}>
              Login
            </Typography>
            <Typography variant="body2">
              <Input
                label="Email address"
                placeholder="Enter your email"
                value={loginCredentials.email}
                onInputChange={onInputChange}
                propName="email"
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                password={true}
                value={loginCredentials.password}
                onInputChange={onInputChange}
                propName="password"
                forgotPasswordHandler={forgotPasswordHandler}
              />
              <Typography className={classes.loginCard}>
                <Button
                  variant="contained"
                  className={classes.loginBtn}
                  onClick={loginBtnHandler}
                >
                  Login
                </Button>

                <Typography variant="p">
                  New to MyJobs?
                  <Typography
                    variant="a"
                    className={[classes.textColor, classes.cursor]}
                    onClick={signUpBtnHandler}
                  >
                    Create an account
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
          </CardContent>
        </Card>

        <Grid className={classes.grid1Login}></Grid>
        <Grid className={classes.grid2Login}></Grid>
      </Box>
    </>
  );
};

export default LoginPage;
