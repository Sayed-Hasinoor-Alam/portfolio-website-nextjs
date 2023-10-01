import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/bmi.png";
import rmtdevImg from "@/public/ecom.png";
import wordanalyticsImg from "@/public/port.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pursuing B.Tech CSE Undergrad Degree, CEMK",
    location: "kolaghat, WB",
    description:
      "I started studying & I found interest in front-end development.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer Intern at Null Class",
    location: "Karnataka, IND",
    description:
      "I worked as a front-end developer Intern for 6th months I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote, Hybrid",
    description:
      "I'm now a full-stack developer . My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to work on full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BMI Calculator using React Tailwind",
    description:
      "This is a React Frontend project using tailwind CSS",
    tags: ["React","Tailwind", "Redux Toolkit"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Ecommerce Site",
    description:
      "This is Ecommerce Site on going project Building with MERN Satck Technology",
    tags: ["React", "Bootstrap", "Context API", "MongoDb", "Express"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolio Site",
    description:
      "A Basic portfolio using HTML CSS and Javascript",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PL/SQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
