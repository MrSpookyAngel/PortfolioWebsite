import { SiGit } from "react-icons/si";
import GitHubIcon from "@mui/icons-material/GitHub";

import ProjectCard from "./ProjectCard";

export default function TestProject() {
  const title = "Test Project 1";
  const description =
    "This is a test project. It is used to test the project card component. It is not a real project. It is just a test.";
  const image = "v-universe.png";
  const links = [
    {
      key: "github",
      Icon: <GitHubIcon sx={{ width: "2rem", height: "2rem" }} />,
      href: "http://github.com",
      ariaLabel: "Link to GitHub Repository",
    },
    {
      key: "git",
      Icon: <SiGit size="2rem" />,
      href: "http://git-scm.com",
      ariaLabel: "Link to Git",
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
