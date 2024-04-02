"use client";

import React, { useState } from "react";
import Button from "./Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex flex-col">
      <label className="flex min-h-[40px] italic flex-col items-center justify-between">
        Login to memos
      </label>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-black rounded-md p-[9px]"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-black my-2 rounded-md p-[9px]"
      />

      <div className="w-full flex justify-center">
        <button
          onClick={handleLogin}
          className="border border-white w-[100px] p-[9px] rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
