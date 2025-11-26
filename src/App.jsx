import React from "react";
import "./index.css";
import { Header } from "./components/sections/Header";
import { Tech } from "./components/sections/Tech";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Blog } from "./components/sections/Blog";
import { Contacts } from "./components/sections/Contacts";


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
