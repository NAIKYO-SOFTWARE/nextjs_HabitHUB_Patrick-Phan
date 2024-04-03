"use client";

import React, { useState } from "react";
import Logo from "./logo/Logo";
import { useDispatch } from "react-redux";
import { dispatchLoginSuccess } from "../redux/store/store";
import { Button, ButtonBase, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // presume user always enters correct credentials
    dispatchLoginSuccess(email, dispatch);
  };

  return (
    <div className=" mt-[80px] w-full flex flex-col justify-start items-center ">
      <div className="my-[30px] text-purple-400 text-[23px] font-bold z-10 mx-auto">
        Login to HabitHUB
      </div>

      <div className="w-[320px] my-[30px] font-thin  text-center text-white text-[17px] z-10 mx-auto">
        Welcome back! Sign in using your social account or email to continue us
      </div>

      {/* here come logos for different social media platforms */}
      <div className="z-10 w-[300px] mr-[-50px]">
        <div className="my-[15px] flex w-[300px] space-x-12 ">
          <Logo brandLogo={"google"} />
          <Logo brandLogo={"facebook"} />
          <Logo brandLogo={"apple"} />
        </div>

        <div className="strike-sides text-gray-500 text-[22px] font-bold">
          OR
        </div>
      </div>

      {/* login form */}
      <form className="mt-[80px] mb-[80px]">
        <div className="bg-white p-5 rounded-lg w-[400px] shadow-lg">
          <TextField
            id="email-login"
            label="Email"
            sx={{
              width: 1,
              borderRadius: "4px",
              outline: "none",
            }}
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        {/* line-breaker */}
        <div className="my-8" />

        <div className="bg-white p-5 rounded-lg w-[400px] shadow-lg">
          <TextField
            id="password"
            label="Password"
            type="password"
            sx={{
              width: 1,
              borderRadius: "4px",
              outline: "none",
            }}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </form>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#1976d2", marginBottom: "30px" }}
        size="large"
        onClick={handleLogin}
        endIcon={<LoginIcon />}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
