import GitHubIcon from "@mui/icons-material/GitHub";

import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const title = "Portfolio";
  const description =
    "My portfolio website built with React, Vite, TypeScript, and Material-UI. It includes animations powered by Framer Motion and a PDF viewer by React-PDF.";
  const image = "Portfolio.png";
  const links = [
    {
      key: "github",
      Icon: <GitHubIcon sx={{ width: "2rem", height: "2rem" }} />,
      href: "http://github.com",
      ariaLabel: "Link to GitHub Repository",
    },
  ];

  return (
    <ProjectCard
      title={title}
      description={description}
      image={image}
      links={links}
    />
  );
}
