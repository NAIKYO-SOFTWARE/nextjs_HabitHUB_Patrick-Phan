import React from "react";
import Login from "../components/Login";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import Suggestions from "./suggestions/page";
import Link from "next/link";

// chính
const Home: React.FC = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;
