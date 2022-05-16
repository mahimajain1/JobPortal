import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Screens/HomePage";
import LoginPage from "../Screens/LoginPage";
import { useNavigate } from "react-router-dom";
import JobsPosted from "../Screens/JobsPosted";
import ForgotPassword from "../Screens/ForgotPassword";
import SignUp from "../Screens/SignUp";
import ResetPassword from "../Screens/ResetPassword";
import PostJob from "../Screens/PostJob";
import axios from "axios";

const AllRoutes = () => {
  const [login, setLogin] = useState();
  const navigate = useNavigate();

  const callApi = async (formData) => {
    try {
      const response = await axios.post(
        "https://jobs-api.squareboat.info/api/v1/auth/login",
        formData
      );
      console.log(JSON.stringify(response.data));
      setLogin(JSON.stringify(response.data));

      if (response.data.success) {
        localStorage.setItem("token", JSON.stringify(response.data.data.token));

        navigate("/jobsPosted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage callApi={callApi} />} />
      <Route exact path="/signUp" element={<SignUp />} />
      <Route exact path="/forgotPassword" element={<ForgotPassword />} />
      <Route exact path="/resetPassword" element={<ResetPassword />} />
      <Route exact path="/jobsPosted" element={<JobsPosted data={login} />} />
      <Route exact path="/postJob" element={<PostJob data={login} />} />
    </Routes>
  );
};

export default AllRoutes;
