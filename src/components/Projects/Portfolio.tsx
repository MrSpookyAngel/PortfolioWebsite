import { SiGit, SiRocket } from "react-icons/si";

import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const image = "Portfolio.png";
  const technologies = [
    "React",
    "Vite",
    "TypeScript",
    "Material-UI",
    "Framer Motion",
    "React-PDF",
  ];
  const title = "Portfolio";
  const description =
    "My portfolio website built with React, Vite, TypeScript, and Material-UI. " +
    "It includes animations powered by Framer Motion and a PDF viewer by React-PDF.";
  const links = [
    {
      key: "live-demo",
      Icon: <SiRocket size="2rem" />,
      href: "https://villanuevauniverse.com/",
      ariaLabel: "Link to Live Demo",
    },
    {
      key: "git-repo",
      Icon: <SiGit size="2rem" />,
      href: "https://git.villanuevauniverse.com/VillanuevaUniverse/Portfolio",
      ariaLabel: "Link to Git Repository",
    },
  ];

  return (
    <ProjectCard
      image={image}
      technologies={technologies}
      title={title}
      description={description}
      links={links}
    />
  );
}
