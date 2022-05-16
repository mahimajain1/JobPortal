import React from "react";
import { InputLabel, TextField, Typography } from "@mui/material";
import useStyles from "../Screens/styles";

const Input = ({
  label,
  placeholder,
  password,
  onInputChange,
  propName,
  value,
  forgotPasswordHandler,
  showError,
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography sx={{ mb: 2 }}>
        <InputLabel
          sx={{
            width: "420px",
            //   fontWeight: "600",

            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            {label}
          </Typography>
          {password && (
            <Typography
              variant="a"
              className={classes.textColor}
              sx={{ fontSize: "14px" }}
              onClick={() => forgotPasswordHandler()}
            >
              Forgot your password?
            </Typography>
          )}
        </InputLabel>
        <TextField
          sx={{ width: "100%", justifyContent: "center" }}
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onInputChange(propName, e.target.value)}
          error={
            propName == "password" && value == "squareboat"
              ? false
              : propName == "email" &&
                (value == "squareboat@gmail.com" || value == "sb@gmail.com")
              ? false
              : propName == "password" || propName == "email" || value == ""
              ? false
              : true
          }
        />
      </Typography>
    </>
  );
};

export default Input;
