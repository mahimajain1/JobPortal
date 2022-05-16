import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar";
import CommonCard from "../Shared/CommonCard";
import CommonGrid from "../Shared/CommonGrid";
import CommonInput from "../Shared/CommonInput";
import CommonPostJob from "../Shared/CommonPostJob";
import useStyles from "./styles";

const PostJob = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar jobPosted={true} />
      <Box className={classes.loginPageBox}>
        <CommonCard title="Post a Job">
          <Typography variant="body2">
            <CommonInput
              label="Job Title*"
              placeholder="Enter job title"
              propName="title"
            />
            <CommonInput
              label="Description*"
              placeholder="Enter job description"
              propName="description"
            />
            <CommonInput
              label="Location*"
              placeholder="Enter location"
              propName="location"
              helperText={true}
            />
            <Typography className={classes.ForgotPasswordBody}>
              <Button variant="contained" className={classes.loginBtn}>
                Post
              </Button>
            </Typography>
          </Typography>
        </CommonCard>

        <CommonGrid postAJob={true} />
      </Box>
    </>
  );
};

export default PostJob;
