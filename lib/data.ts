import React from "react";
import shopcartImg from "@/public/homepage-client.jpg"
import netflixcloneImg from '@/public/netflixclone.jpg'
import dashboardImg from '@/public/dashboard.jpg'
import notesappImg from '@/public/notesApp.jpg'
import HTMLICON from "@/public/icons8-html5-96.png"
import REACT from "@/public/icons8-react-native-96.png"
import REDUX from "@/public/icons8-redux-96.png"
import CSS from "@/public/icons8-css-100.png"
import EXPRESSJS from '@/public/icons8-express-js-96.png'
import NEXTJS from '@/public/icons8-nextjs-96.png'
import NODEJS from '@/public/icons8-node-js-96.png'
import JAVASCRIPT from '@/public/icons8-javascript-96.png'
import TYPESCRIPT from '@/public/icons8-typescript-96.png'
import TAILWINDCSS from '@/public/icons8-tailwind-css-96.png'
import MATERIALUI from '@/public/icons8-material-ui-96.png'
import GIT from '@/public/icons8-git-96.png'
import MONGODB from '@/public/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png'
import STYLEDCOMPONENTS from '@/public/icons8-styled-components-96.png'
import FRAMERMOTION from "@/public/framer-motion.png"

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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "ShopCart - Mern Stack",
    description:
    "Shopcart is a dynamic and user-friendly e-commerce platform built on the powerful MERN stack technologies.",
    tags: ["React", "Styled Components", "Redux Toolkit", "Axios","React RouterDom v6", "Express JS", "MongoDB","JWT"],
    imageUrl: shopcartImg,
  },
  {
    title: "AuraBay Dashboard",
    description:
    "The AuraBAy Dashboard project is a comprehensive web application that offers a range of powerful features for managing and visualizing data.",
    tags: ["React", "Material UI", "Redux Toolkit", "Axios","React RouterDom v6"],
    imageUrl: dashboardImg,
  },
  {
    title: "Netflix Clone",
    description:
    "Made a Netfilx Clone using the one of the most popular Tailwind CSS Framework. As multiple pages and for movies data used the TMDB api.",
    tags: ["React", "Tailwind", "Axios", "React RouterDom v6", "TMDB API"],
    imageUrl: netflixcloneImg,
  },
  {
    title: "Notes App",
    description:
      "I made this as my first Project. It covers all the basics and the CRUD operations needed",
    tags: ["React", "Materail UI"],
    imageUrl: notesappImg,
  },
] as const;

export const skillsData = [
  { name: "HTML", iconImg: HTMLICON },
  { name: "CSS", iconImg: CSS },
  { name: "JavaScript", iconImg: JAVASCRIPT },
  { name: "TypeScript", iconImg: TYPESCRIPT },
  { name: "React", iconImg: REACT },
  { name: "Next.js", iconImg: NEXTJS },
  { name: "Material UI", iconImg: MATERIALUI },
  { name: "Node.js", iconImg: NODEJS },
  { name:"Styled Components", iconImg:STYLEDCOMPONENTS},
  { name: "Git", iconImg: GIT },
  { name: "Tailwind", iconImg: TAILWINDCSS },
  { name: "MongoDB", iconImg: MONGODB },
  { name: "Redux", iconImg: REDUX },
  { name: "Express", iconImg: EXPRESSJS },
  { name: "Framer Motion", iconImg: FRAMERMOTION },
] as const;
