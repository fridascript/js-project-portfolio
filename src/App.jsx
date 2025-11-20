import React from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills"


export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <Projects />
      <Skills />
    </>
  );
};
