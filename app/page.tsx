import React from "react";
import Login from "../components/Login";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import Suggestions from "./suggestions/page";
import Link from "next/link";
import Menu from "@/components/Menu";

// chính
const Home: React.FC = () => {
  return (
    <div className="w-[430px]">
      <Login />
    </div>
  );
};

export default Home;
