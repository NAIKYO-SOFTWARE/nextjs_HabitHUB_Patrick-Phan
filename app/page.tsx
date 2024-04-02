import React from "react";
import Login from "./components/Login";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Suggestions from "./components/Suggestions";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <Login />

      <Link href='about'>About</Link>
    </div>
  );
};

export default Home;
