import React from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Blog } from "./components/Blog";
import { Contacts } from "./components/Contacts";


export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <Projects />
      <Skills />
      <Blog />
      <Contacts />
    </>
  );
};
