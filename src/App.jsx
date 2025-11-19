import React from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";


export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <Projects />
    </>
  );
};
