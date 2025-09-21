// Import logos
import html from "./assets/Frontend_logo/HTML.png";
import css from "./assets/Frontend_logo/Css.png";
import bootstrap from "./assets/Frontend_logo/bootstrap.png";
import materialui from "./assets/Frontend_logo/materialui.png";
import gsap from "./assets/Frontend_logo/GSAP.png";
import reactLogo from "./assets/Frontend_logo/React.png";

import node from "./assets/Backend_logo/Node.png";
import express from "./assets/Backend_logo/express.png";
import mongodb from "./assets/Backend_logo/MongoDB.png";
import mysql from "./assets/Backend_logo/Mysql.png";

import js from "./assets/Language_logo/javascript.png";
import python from "./assets/Language_logo/Python.png";
import cpp from "./assets/Language_logo/C.png";

import git from "./assets/Tools_logo/git.png";
import postman from "./assets/Tools_logo/postman.png";
import vscode from "./assets/Tools_logo/vscode.png";

// Data structure
export const skillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "Bootstrap", logo: bootstrap },
      { name: "Material UI", logo: materialui },
      { name: "GSAP", logo: gsap },
      { name: "React", logo: reactLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: node },
      { name: "Express.js", logo: express },
      { name: "MongoDB", logo: mongodb },
      { name: "MySql", logo: mysql },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: js },
      { name: "Python", logo: python },
      { name: "C++", logo: cpp },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: git },
      { name: "postman", logo: postman },
      { name: "VS Code", logo: vscode },
    ],
  },
];
