import GitHubIcon from "@mui/icons-material/GitHub";

import ProjectCard from "./ProjectCard";

export default function LightPoverty() {
  const title = "Electricity and Settlement Detection in Sub-Saharan Africa";
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
